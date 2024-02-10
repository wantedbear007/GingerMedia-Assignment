import { baseUrl } from "../utils/res";

// for connection with the backend !
export class Services {
  static async login(email, password) {
    try {
      const response = await fetch(baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (!response.ok) {
        throw new Error(
          "Failed to login. Please check your email and password."
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error("errr");
      } else {
        console.error("Error ", error);
        throw error;
      }
    }
  }

  static async getUserDetails(token) {
    try {
      const response = await fetch(baseUrl + "/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      });
      if (!response) {
        throw new Error("failed to login !");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log("error occurred !");
    }
  }

  static async registerUser({ name, email, age, dob, contact, password }) {
    try {
      const response = await fetch(baseUrl + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          age: age,
          dob: dob,
          contact: contact,
          password: password,
        }),
      });

      if (response.status == 200) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
      console.log("error occurred !");
    }
  }
}
