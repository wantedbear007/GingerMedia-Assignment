import React, { useEffect, useState } from "react";
import { Services } from "../services/services";

const HomeScreen = ({}) => {
  // const { name, email, age, dob, contact, password } = userData;

  const [dataLoading, setIsLoading] = useState(true);
  const [userData1, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    contact: "",
    // password :""
  });

  const getData = async () => {
    const value = localStorage.getItem("token");
    const userData = await Services.getUserDetails(value);
    setUserData(userData);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);



  const { name, email, age, dob, contact } = userData1;

  return (
    <>
      {dataLoading ? (
        <h1>Data is loading </h1>
      ) : (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span> {email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Age:</span> {age}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date of Birth:</span> {dob}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Contact:</span> {contact}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
