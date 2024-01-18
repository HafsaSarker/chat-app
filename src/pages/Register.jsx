import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import { storage } from "../firebase.js";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      avatar: e.target.files[0],
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsDisabled(true);

    const { displayName, email, password, avatar } = formData;

    try {
      // create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // upload user avatar
      const storageRef = ref(storage, displayName);

      await uploadBytesResumable(storageRef, avatar).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/home");
          } catch (error) {
            console.log(error.message);
          }
        });
      });
    } catch (error) {
      setError(error.message);
      setIsDisabled(false);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center bg-[url('./bg.png')] bg-center bg-cover bg-no-repeat h-full text-gray-50">
      <h1 className="text-center tracking-widest font-bold">Kiki Chat</h1>
      <h3 className="text-center my-2">Register</h3>

      <form className="flex flex-col gap-2 w-96" onSubmit={handleRegister}>
        <div>
          <label
            htmlFor="displayName"
            className="block mb-2 text-sm font-medium"
          >
            Username
          </label>
          <input
            type="text"
            id="displayName"
            name="displayName"
            className="bg-gray-3 border-0 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="SugarCube"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-3 border-0 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-3 border-0 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="•••••••••"
            required
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="avatar"
            className="inline-block text-sm font-medium mb-2"
          >
            Upload Avatar
          </label>
          <input
            className="relative block w-full min-w-0 flex-auto rounded-lg border-solid bg-gray-3 border-0 bg-clip-padding px-3 py-[0.32rem] text-base font-normal  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-gray-4 file:border-solid file:border-inherit file:bg-gray-4 file:px-3 file:py-[0.32rem] file:text-gray-50 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-gray-3 focus: focus:outline-none"
            type="file"
            id="avatar"
            name="avatar"
            onChange={handleFileChange}
          />
        </div>

        {error && (
          <span className="text-center text-xs text-rose-400">{error}</span>
        )}

        <button
          type="submit"
          disabled={isDisabled}
          className="mb-2 text-sm font-medium text-white bg-blue-1 border border-blue-1 focus:outline-none hover:opacity-90 rounded-lg px-5 py-2.5"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm font-light text-center">
        Already have an account?{" "}
        <Link
          to="/"
          className="font-medium text-blue-1 hover:underline hover:text-blue-1"
        >
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Register;
