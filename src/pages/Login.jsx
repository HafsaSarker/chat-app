import React from "react";

function Login() {
  return (
    <div className="flex flex-col w-96">
      <h1 className="text-center">Kiki Chat</h1>
      <h3 className="text-center my-2">Welcome Back</h3>
      <form className="flex flex-col gap-2">
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:outline-violet-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:outline-violet-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
          />
        </div>

        <button
          type="button"
          className="mb-2 text-sm font-medium text-white bg-violet-500 border border-gray-300 focus:outline-none hover:bg-violet-400 rounded-lg px-5 py-2.5 focus:ring-violet-500 focus:ring-2"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm font-light text-gray-900 text-center">
        Don't have an account?{" "}
        <a
          href="/register"
          className="font-medium text-violet-500 hover:underline hover:text-violet-500"
        >
          Register here
        </a>
      </p>
    </div>
  );
}

export default Login;
