import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appErrors";

export class CarsIdValid {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    const car = await prisma.cars.findFirst({ where: { id: String(id) } });
    if (!car) {
      throw new AppError(404, "Car not found");
    }
    next();
  }
}
