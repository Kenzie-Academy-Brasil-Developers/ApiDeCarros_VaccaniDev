import { prisma } from "../../database/prisma";
import { carsCreate, carsCreateMany } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";
import { carDefaultExpects } from "../utils/carDefaultExpects";

describe("Integration test: get many cars", () => {
  test("should be able to get many cars successfully", async () => {
    await prisma.cars.createMany({ data: carsCreateMany });

    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2);
    carDefaultExpects(data[0]);
  });

  test("should be able to get a car by the id successfully", async () => {
    const car = await prisma.cars.create({ data: carsCreate });

    const data = await request
      .get(`/cars/${car.id}`)
      .expect(200)
      .then((response) => response.body);

    carDefaultExpects(data);
  });

  test("should be throw error when try get a car with a invalid id", async () => {
    await request.get("/cars/invalidid").expect(404);
  });
});
