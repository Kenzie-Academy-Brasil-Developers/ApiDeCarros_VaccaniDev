import { injectable } from "tsyringe";
import { TCars, TCarsCreate, TCarsUpdate } from "../schemas/user.schema";
import { prisma } from "../database/prisma";

@injectable()
export class CarsServices {
  async create(body: TCarsCreate): Promise<TCars> {
    const cars = await prisma.cars.create({ data: body });

    return cars as TCars;
  }
  async findOne(id: string): Promise<TCars> {
    const data = await prisma.cars.findFirst({ where: { id } });

    return data as TCars;
  }

  async findMany(): Promise<TCars[]> {
    const data = await prisma.cars.findMany();

    return data as TCars[];
  }

  async update(id: string, body: TCarsUpdate): Promise<TCars> {
    const data = await prisma.cars.update({ where: { id }, data: body });

    return data as TCars;
  }

  async delete(id: string): Promise<void> {
    await prisma.cars.delete({ where: { id } });
  }
}
