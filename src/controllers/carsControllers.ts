import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { CarsServices } from "../services/carsService";

@injectable()
export class CarsControllers {
  constructor(@inject("CarsServices") private carsServices: CarsServices) {}
  async create(req: Request, res: Response) {
    const response = await this.carsServices.create(req.body);

    return res.status(201).json(response);
  }
  async findMany(req: Request, res: Response) {
    const response = await this.carsServices.findMany();

    return res.status(200).json(response);
  }
  async findOne(req: Request, res: Response) {
    const response = await this.carsServices.findOne(String(req.params.id));

    return res.status(200).json(response);
  }
  async update(req: Request, res: Response) {
    const response = await this.carsServices.update(
      String(req.params.id),
      req.body
    );

    return res.status(200).json(response);
  }

  async delete(req: Request, res: Response) {
    await this.carsServices.delete(String(req.params.id));

    return res.status(204).json();
  }
}
