import React, { useContext, useEffect, useState } from "react";
import {
  getDoc,
  getDocs,
  where,
  query,
  collection,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";

function Search() {
  const [showCard, setShowCard] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getAllUsers = async () => {
      // Create a reference to the cities collection
      const ref = collection(db, "users");

      // Create a query against the collection.
      const q = query(ref, where("displayName", "!=", ""));

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        doc.data().uid != currentUser.uid &&
          setUsers((prev) => ({
            ...prev,
            [doc.id]: doc.data(),
          }));
      });
    };

    getAllUsers();
  }, []);

  // js doesn't have filter method for objects
  // so create filter function
  function filterObject(obj, callback) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key, val]) => callback(val, key))
    );
  }

  // criteria to be filtered on
  const filterCallback = (user) =>
    user.displayName.toLowerCase().includes(searchInput.toLowerCase());
  let filteredUsers = searchInput ? filterObject(users, filterCallback) : users;

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // select a user and close search box
  const selectUser = (user) => {
    setSelectedUser(user);
    setShowCard(false);
  };

  const handleUserSelect = async () => {
    // check if chat between curr user and selected user exists
    const combinedId = currentUser.uid + selectedUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      // create a chat document if not exists between the two users
      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // update curr and selected user's collection of "userChats"
        // "userChats" -> collection of all users the curr user has chatted with
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: selectedUser.uid,
            displayName: selectedUser.displayName,
            photoURL: selectedUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", selectedUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  selectedUser && handleUserSelect();

  return (
    <div className="border-gray-400 text-gray-400  bg-inherit w-full text-sm flex items-center  border-b border-b-gray-1 h-16 py-9 px-2">
      <button
        onClick={() => setShowCard(true)}
        className="bg-gray-1 w-full px-2 rounded-sm py-1 focus:outline-none text-left"
      >
        Find or start a conversation
      </button>

      {showCard && (
        <div
          className="absolute top-0 left-0 w-full h-full  
        flex flex-col items-center justify-center bg-black bg-opacity-80 text-gray-50"
        >
          <div className="w-96 px-4 flex items-center justify-between pb-1">
            <h3>Search for DMs or users</h3>
            <button
              onClick={() => setShowCard(false)}
              className="bg-transparent"
            >
              X
            </button>
          </div>

          <div className="flex flex-col items-center px-4 py-4 w-96 h-96 rounded-md bg-gray-3">
            <input
              className="bg-gray-1 w-full py-4 px-2 rounded-md focus:outline-none placeholder-zinc-400"
              type="text"
              placeholder="Where would you like to go?"
              onChange={handleChange}
            />

            {filteredUsers && (
              <div className="flex flex-col justify-start w-full">
                {Object.keys(filteredUsers).map((key, index) => (
                  <div
                    key={index}
                    onClick={() => selectUser(users[key])}
                    className="flex w-full mt-3 items-center gap-3  py-1.5 px-2 rounded-sm hover:bg-gray-4 cursor-pointer"
                  >
                    <img
                      className="w-5 h-5 rounded-full"
                      src={users[key].photoURL}
                      alt=""
                    />
                    <h3 className="text-sm">{users[key].displayName}</h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
