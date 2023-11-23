import React from "react";

function Register() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center">Kiki Chat</h1>
      <h3 className="text-center my-2">Register</h3>
      <form className="flex flex-col gap-2">
        <div>
          <label
            for="user_name"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="text"
            id="user_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:outline-violet-500 block w-full p-2.5"
            placeholder="SugarCube"
            required
          />
        </div>
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

        <div class="mb-3">
          <label
            for="formFile"
            className="inline-block text-sm font-medium mb-2 text-gray-900"
          >
            Upload Avatar
          </label>
          <input
            className="relative block w-full min-w-0 flex-auto rounded-lg border-solid bg-gray-50 border border-gray-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-gray-900 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-gray-900 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:text-gray-900 focus:ring-violet-500 focus:ring-2"
            type="file"
            id="formFile"
          />
        </div>

        <button
          type="button"
          className="mb-2 text-sm font-medium text-white bg-violet-500 border border-gray-300 focus:outline-none hover:bg-violet-400 rounded-lg px-5 py-2.5 focus:ring-violet-500 focus:ring-2"
        >
          Sign Up
        </button>
      </form>

      <p className="text-sm font-light text-gray-900 text-center">
        Already have an account?{" "}
        <a
          href="/"
          className="font-medium text-violet-500 hover:underline hover:text-violet-500"
        >
          Login here
        </a>
      </p>
    </div>
  );
}

export default Register;
