import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Landing = () => {
  const [selectedOption, setSelectedOption] = useState("login");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <center></center>
      <div className="flex flex-col items-center p-20">
        <h1 className="p-30">Project Assignment</h1>
        <div className="mb-4">
          <button
            className={`mr-2 px-4 py-2 rounded ${
              selectedOption === "login"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleOptionChange("login")}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedOption === "register"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => handleOptionChange("register")}
          >
            Register
          </button>
        </div>
        <div>{selectedOption === "login" ? <Login /> : <Register />}</div>
      </div>
    </>
  );
};

export default Landing;
