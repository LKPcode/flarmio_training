const cars = [
  {
    brand: "Audi",
    year: 1999,
    price: 12222,
  },
  {
    brand: "Nissan",
    year: 2003,
    price: 24222,
  },
];

// Transform to an object that has the brand name as key e.g. {Audi: {year: 1999, price:12222}, Nissan: {...}}.

const transform = (cars, idProp) => {
  return cars.reduce((acc, car) => {
    const key = car[idProp];
    acc[key] = {
      year: car.year,
      price: car.price,
    };
    return acc;
  }, {});
};

const transformedCars = transform(cars, "brand");

console.log("transformedCars", transformedCars);
