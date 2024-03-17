import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import helmet from "helmet";
import cors from "cors";
import { carsRouter } from "./routes/cars.router";
import { HandleErrorsMiddleware } from "./middlewares/handleErros.middleware";

export const app: Application = express();

app.use(cors());

app.use(helmet());

app.use(json());

app.use("/cars", carsRouter);

app.use(HandleErrorsMiddleware.execute);
