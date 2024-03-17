import { InvalidCarsCreate, carsCreate } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";

describe("Integration test: create car", () => {
  test("should be able to create car sucessfully", async () => {
    const data = await request
      .post("/cars")
      .send(carsCreate)
      .expect(201)
      .then((response) => response.body);

    carDefaultExpects(data);
  });

  test("should throw error when try to create a car with a missing body parameter", async () => {
    await request.post("/cars").expect(400);
  });

  test("should throw error when try to create a car with invalid data types", async () => {
    await request.post("/cars").send(InvalidCarsCreate).expect(400);
  });
});
