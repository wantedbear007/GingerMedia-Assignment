import mysql, { Connection } from "mysql";

export default class DatabaseServices {
  private static connection: Connection | null = null;

  //  getter for connection instance
  static getConnection(): Connection | null {
    return DatabaseServices.connection;
  }

  // destroy connection
  // static destroyConnection(): void {
  //   DatabaseServices.connection.destroy();
  // }

  establishConnection(): boolean {
    const dbHost: string | undefined = "localhost";
    const dbUser: string | undefined = "wanted";
    const dbPass: string | undefined = "wanted";
    const dbName: string | undefined = "projectone";

    if (!(dbHost || dbPass || dbUser)) {
      console.log("missing database credentials !");
      return false;
    }

    try {
      const conn: Connection = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: dbName,
      });

      conn.connect((err) => {
        if (!err) {
          console.log("connection established !");
          DatabaseServices.connection = conn;
        } else {
          throw err;
        }
      });

      return true;
    } catch (err) {
      console.log("failed to connect ");
      return false;
    }
  }
  async registerUser(
    name: string,
    email: string,
    age: string,
    dob: string,
    contact: string,
    password: string
  ): Promise<String> {
    return new Promise((resolve, reject) => {
      if (!DatabaseServices.connection) {
        reject("No database connection!");
        return;
      }

      DatabaseServices.connection.query(
        "INSERT INTO user_data (name, email, age, dob, contact, password) VALUES (?, ?, ?, ?, ?, ?)",
        [name, email, age, dob, contact, password],
        (err, results) => {
          if (err) {
            reject(err);
            return "na";
          } else {
            return password + name;
            // console.log(password+name);
          }

          // resolve();
        }
      );
    });
  }

  async loginUser(email: string, password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const query: string = `SELECT * FROM user_data WHERE email = ? AND password = ?`;
      DatabaseServices.connection?.query(
        query,
        [email, password],
        (err, results) => {
          if (err) {
            console.error("Error executing query:", err);
            reject(err);
            return "na";
          }

          if (results && results.length > 0) {
            console.log("Login successful!");
            resolve(email + password);
            return;
          } else {
            console.log(
              "Login failed: User not found or incorrect credentials."
            );
            reject("na");
          }
        }
      );
    });
  }

  async getUserDetails(token: string): Promise<{
    name: string;
    email: string;
    age: string;
    dob: string;
    contact: string;
  }> {
    return new Promise<{
      name: string;
      email: string;
      age: string;
      dob: string;
      contact: string;
    }>((resolve, reject) => {
      const query: string = `SELECT * FROM user_data WHERE CONCAT(email, password) = ?`;
      DatabaseServices.connection?.query(query, [token], (err, results) => {
        if (err) {
          console.log(err.message)
          reject("error occurred ");
          return;
        }

        if (results.length > 0) {
          const user = results[0];
          resolve({
            name: user.name,
            email: user.email,
            age: user.age,
            dob: user.dob,
            contact: user.contact,
          });
          // return;
        } else {
          reject("error")
          // resolve({});
          // return;
        }
      });
    });
  }
}
