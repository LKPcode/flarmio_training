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

// prefered output
// const newCars4 = {
//     audi: 2000,
//     fiat: 2002
// };

const newCars4 = (cars, idProp) => {
  return cars.reduce((acc, car) => {
    acc[car[idProp]] = car.year;
    return acc;
  }, {});
};

const carsTransformed = newCars4(cars, "brand");

console.log("carsTransformed", carsTransformed);
