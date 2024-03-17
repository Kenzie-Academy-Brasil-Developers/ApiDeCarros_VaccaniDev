export interface ICar {
  id: string;
  name: string;
  description: string | undefined;
  brand: string;
  year: number;
  km: number;
}

export const carDefaultExpects = (data: ICar) => {
  expect(data).toBeDefined();

  expect(data.id).toBeDefined();
  expect(typeof data.id).toEqual("string");

  expect(data.name).toBeDefined();
  expect(typeof data.name).toEqual("string");

  expect(data.description).toBeDefined();
  if (data.description !== undefined) {
    expect(typeof data.description).toEqual("string");
  }

  expect(data.brand).toBeDefined();
  expect(typeof data.brand).toEqual("string");

  expect(data.year).toBeDefined();
  expect(typeof data.year).toEqual("number");

  expect(data.km).toBeDefined();
  expect(typeof data.km).toEqual("number");
};
