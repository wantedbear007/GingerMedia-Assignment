import React, { useEffect, useState } from "react";
import { Services } from "../services/services";

const HomeScreen = ({}) => {
  // const { name, email, age, dob, contact, password } = userData;

  const [dataLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    contact: "",
    password: "",
  });

  useEffect(async () => {
    const value = localStorage.getItem("token");
    const userData = await Services.getUserDetails(value);
    setUserData(userData)
    console.log(userData); // Outputs: 'value'
  }, []);

  return <>{dataLoading ? <h1>Data is loading </h1> : <h1>hlello</h1>}</>;
};

export default HomeScreen;
