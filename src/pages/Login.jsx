import React from "react";

function Login() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[url('./bg.png')] bg-center bg-cover bg-no-repeat h-full text-gray-50">
      <h1 className="text-center tracking-widest font-bold">Kiki Chat</h1>
      <h3 className="text-center my-2">Welcome Back</h3>
      <form className="flex flex-col gap-2 w-96">
        <div>
          <label for="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-3 border-0 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label for="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-3 border-0 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>

        <button
          type="button"
          className="mb-2 text-sm font-medium text-white bg-blue-1 border border-blue-1 focus:outline-none hover:opacity-90 rounded-lg px-5 py-2.5"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm font-light text-center">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-medium text-blue-1 hover:underline hover:text-blue-1"
        >
          Register here
        </a>
      </p>
    </div>
  );
}

export default Login;
