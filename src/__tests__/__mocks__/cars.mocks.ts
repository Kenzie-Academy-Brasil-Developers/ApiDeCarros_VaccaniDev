export const carsCreate = {
  name: "Car name",
  description: "Car description",
  brand: "Card brand",
  year: 2023,
  km: 10000,
};

export const InvalidCarsCreate = {
  name: 1234,
  description: 1234,
  brand: 1234,
  year: "2023",
  km: "10000",
};

export const carsUpdate = {
  name: "Car name updated",
  description: "Car description updated",
  brand: "Card brand updated",
  year: 2022,
  km: 20000,
};

export const InvalidCarsUpdate = {
  name: 1234,
  description: 1234,
  brand: 1234,
  year: "2022",
  km: "20000",
};

export const carsCreateMany = [
  {
    name: "Car name 1",
    description: "Car description 1",
    brand: "Card brand",
    year: 2021,
    km: 10000,
  },
  {
    name: "Car name 2",
    description: "Car description 2",
    brand: "Card brand",
    year: 2022,
    km: 20000,
  },
];
