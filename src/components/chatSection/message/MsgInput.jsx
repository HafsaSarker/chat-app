import React, { useContext } from "react";
import { useState } from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { BsFiletypeGif } from "react-icons/bs";
import { IoIosAttach } from "react-icons/io";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import { v4 as uuid } from "uuid";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../firebase";

function MsgInput() {
  const [msg, setMsg] = useState("");
  const [file, setFile] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const sendMessage = async () => {
    const chatsRef = doc(db, "chats", data.chatId);

    // reset text field
    const text = msg;
    setMsg("");

    if (file) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                file: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(chatsRef, {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setFile(null);

    // re-enable text input
    setIsDisabled(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-4 h-16 py-9 w-full px-2">
      <input
        className="w-full bg-transparent focus:outline-none"
        type="text"
        disabled={isDisabled}
        value={msg || ""}
        placeholder="Type something..."
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setIsDisabled(true);
            sendMessage();
          }
        }}
      />

      <div className="flex gap-1 text-xl pr-3">
        <label htmlFor="file-input">
          <IoIosAttach />
        </label>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          style={{ display: "none" }}
          id="file-input"
        />
        <BsFiletypeGif />
        <BsFillEmojiHeartEyesFill />
      </div>
    </div>
  );
}

export default MsgInput;
