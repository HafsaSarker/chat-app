import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase.js";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);

  return res;
};

export const updateUser = async (user, formData, avatarUrl) => {
  await updateProfile(user, {
    displayName: formData.user_name,
    photoURL: avatarUrl,
  });
};

export const addDocInUserCollection = async (userId, formData, avatarUrl) => {
  await setDoc(doc(db, "users", userId), {
    uid: userId,
    displayName: formData.user_name,
    email: formData.email,
    photoURL: avatarUrl,
  });
};

export const initUserChatsCollection = async (userId) => {
  await setDoc(doc(db, "userChats", userId), {});
};
