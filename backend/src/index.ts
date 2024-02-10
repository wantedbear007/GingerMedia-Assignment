import DatabaseServices from "./app/database";
import express from "express";
import bodyParser from "body-parser";
import { Request, Response } from "express";
import cors from "cors";
import { PageRoutes } from "./app/pageRoutes";

console.log("hello there !");

const databaseServices: DatabaseServices = new DatabaseServices();

const isSuccess: boolean = databaseServices.establishConnection();
PageRoutes.startServices();

console.log(isSuccess);

