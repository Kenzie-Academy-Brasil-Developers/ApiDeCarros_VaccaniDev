import { prisma } from "../../database/prisma";
import { carsCreate } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
  it("should be able to delete a car successfully", async () => {
    const car = await prisma.cars.create({ data: carsCreate });

    await request.delete(`/cars/${car.id}`).expect(204);
  });
  test("should throw error when product is invalid", async () => {
    const data = await request
      .delete("/cars/invalidid")
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found");
  });
});
