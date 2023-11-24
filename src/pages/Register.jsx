import React from "react";

function Register() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-[url('./bg.png')] bg-center bg-cover bg-no-repeat h-full text-gray-50">
      <h1 className="text-center tracking-widest font-bold">Kiki Chat</h1>
      <h3 className="text-center my-2">Register</h3>
      <form className="flex flex-col gap-2 w-96">
        <div>
          <label for="user_name" className="block mb-2 text-sm font-medium">
            Username
          </label>
          <input
            type="text"
            id="user_name"
            className="bg-gray-3 border-0 text-sm rounded-lg focus:outline-none block w-full p-2.5"
            placeholder="SugarCube"
            required
          />
        </div>
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

        <div class="mb-3">
          <label
            for="formFile"
            className="inline-block text-sm font-medium mb-2"
          >
            Upload Avatar
          </label>
          <input
            className="relative block w-full min-w-0 flex-auto rounded-lg border-solid bg-gray-3 border-0 bg-clip-padding px-3 py-[0.32rem] text-base font-normal  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-gray-4 file:border-solid file:border-inherit file:bg-gray-4 file:px-3 file:py-[0.32rem] file:text-gray-50 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-gray-3 focus: focus:outline-none"
            type="file"
            id="formFile"
          />
        </div>

        <button
          type="button"
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
