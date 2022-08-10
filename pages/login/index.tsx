import React, { useState } from "react";
import axios from "axios";

function Index() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const credentials = { username, password };

    const user = await axios.post("/api/auth/login", credentials);

    console.log("user is", user);
  };

  return (
    <div className="flex justify-center px-10 py-20">
      <div className="flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        <div className="mb-4">
          <label
            className="block mb-2 font-sans text-sm font-bold text-grey-darker"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker "
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block mb-2 font-sans text-sm font-bold text-grey-darker"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs italic text-red">Please choose a password.</p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="w-5/6 px-4 py-4 font-sans font-bold rounded hover:bg-blue-dark text-blue hover:bg-gray-100"
            type="button"
            onClick={(e) => handleLogin(e)}
          >
            Sign In
          </button>
          <a
            className="inline-block text-sm font-normal align-baseline text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Index;
