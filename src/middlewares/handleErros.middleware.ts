import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/appErrors";

export class HandleErrorsMiddleware {
  public static execute = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ): Response => {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({ message: error.message });
    }

    if (error instanceof ZodError) {
      return res.status(400).json({ error: error.errors });
    }

    console.log(error);
    return res.status(500).json({ error: "Internal server error." });
  };
}
