const cars = [
  {
    brand: "audi",
    year: 2000,
  },
  {
    brand: "fiat",
    year: 2002,
  },
];

const newCars3 = cars.map((car) => {
  return {
    [car.brand]: car.year,
  };
});

console.log("newcars3", newCars3);
