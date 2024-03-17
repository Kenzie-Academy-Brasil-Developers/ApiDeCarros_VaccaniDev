import { prisma } from "../../database/prisma";
import {
  InvalidCarsUpdate,
  carsCreate,
  carsUpdate,
} from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
  test("should be able to update car successfully", async () => {
    const car = await prisma.cars.create({ data: carsCreate });

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(carsUpdate)
      .expect(200)
      .then((response) => response.body);

    const newCar = { ...car, ...carsUpdate };

    expect(data).toStrictEqual(newCar);
  });

  test("should throw error when product id is invalid", async () => {
    const data = await request
      .patch("/cars/invalidid")
      .expect(404)
      .then((response) => response.body);
  });

  test("should throw error when product id is invalid", async () => {
    const car = await prisma.cars.create({ data: carsCreate });

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(InvalidCarsUpdate)
      .expect(400)
      .then((response) => response.body);
  });
});
