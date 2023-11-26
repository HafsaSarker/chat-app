import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import {
  createUser,
  updateUser,
  addDocInUserCollection,
  initUserChatsCollection,
} from "../utils/register.js";

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
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

    try {
      const res = await createUser(formData.email, formData.password);

      // upload user avatar
      const storageRef = ref(storage, formData.user_name);

      const uploadTask = uploadBytesResumable(storageRef, formData.avatar);

      uploadTask.on(
        (error) => {
          setError(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateUser(res.user, formData, downloadURL);

            // Add a new document in collection "users"
            await addDocInUserCollection(res.user.uid, formData, downloadURL);

            // A collection of all the user's chats
            await initUserChatsCollection(res.user.uid);

            navigate("/home");
          });
        }
      );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center bg-[url('./bg.png')] bg-center bg-cover bg-no-repeat h-full text-gray-50">
      <h1 className="text-center tracking-widest font-bold">Kiki Chat</h1>
      <h3 className="text-center my-2">Register</h3>

      <form className="flex flex-col gap-2 w-96" onSubmit={handleRegister}>
        <div>
          <label htmlFor="user_name" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
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
          className="mb-2 text-sm font-medium text-white bg-blue-1 border border-blue-1 focus:outline-none hover:opacity-90 rounded-lg px-5 py-2.5"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm font-light text-center">
        Already have an account?{" "}
        <a
          href="/"
          className="font-medium text-blue-1 hover:underline hover:text-blue-1"
        >
          Login here
        </a>
      </p>
    </div>
  );
}

export default Register;
