import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[url('./bg.png')] bg-center bg-cover bg-no-repeat h-full text-gray-50">
      <h1 className="text-center tracking-widest font-bold">Kiki Chat</h1>
      <h3 className="text-center my-2">Welcome Back</h3>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 w-96">
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

        {error && (
          <span className="text-center text-xs text-rose-400">{error}</span>
        )}

        <button
          type="submit"
          className="mb-2 text-sm font-medium text-white bg-blue-1 border border-blue-1 focus:outline-none hover:opacity-90 rounded-lg px-5 py-2.5"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm font-light text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-blue-1 hover:underline hover:text-blue-1"
        >
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;
