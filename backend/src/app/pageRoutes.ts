import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import cors from "cors";
import DatabaseServices from "./database";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const databaseServices: DatabaseServices = new DatabaseServices();

export class PageRoutes {
  constructor() {}

  static startServices(): void {
    // console.log("services started ");
    app.get("/", (req: Request, res: Response) => {
      res.status(200).send({ message: "hello" });
    });

    app.post("/login", async (req: Request, res: Response) => {
      const { email, password } = req.body;

      if (!(email || password)) {
        res.send("all fields required !");
      } else {
        try {
          const isUserAvailable: string = await databaseServices.loginUser(
            email,
            password
          );
          if (isUserAvailable != "na") {
            res.status(200).send({ token: isUserAvailable });
          } else {
            res.status(400).send({ message: "failed " });
          }
        } catch (err) {
          res.status(400).send({ message: "failed " });
        }
      }
    });

    app.post("/register", async (req: Request, res: Response) => {
      const { name, email, age, dob, contact, password } = req.body;

      if (!(name || email || age || dob || contact || password)) {
        res.send("all fields required !");
      } else {
        try {
          await databaseServices.registerUser(
            name,
            email,
            age,
            dob,
            contact,
            password
          );
        } catch (err) {
          console.log("error occurred  !");
        }
      }
      res.status(200).send("success");
    });

    // bhanuy@ple.comsecurepassword
    app.post("/getUser", async (req: Request, res: Response) => {
      try {
        const { token } = req.body;
        if (!token) {
          console.log(token);
          res.status(400).send("token required !");
        } else {
          const data = await databaseServices.getUserDetails(token);
          res.status(200).send({ message: "success", ...data });
        }
      } catch (err) {
        console.log(err);
        res.status(400).send({ message: "hello22" });
      }
    });

    app.listen(8080, () => {
      console.log("you can start listening at: http://localhost:8080");
    });
  }
}
