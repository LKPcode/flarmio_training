const basket = [
  "apple",
  "apple",
  "orange",
  "apple",
  "orange",
  "orange",
  "apple",
  "apple",
];

const products = {
  apple: 12,
  orange: 32,
  pen: 22,
  notebook: 89,
  peach: 18,
};

const product_occurances = {
  apple: 0,
  orange: 0,
  pen: 0,
  notebook: 0,
  peach: 0,
};

const product_offers = {
  apple: 2,
  orange: 6,
  pen: 0,
  notebook: 0,
  peach: 0,
};

const total = basket.reduce((acc, prod_name) => {
  product_occurances[prod_name]++;

  if (product_occurances[prod_name] % product_offers[prod_name] == 0) {
    return acc;
  }

  return acc + products[prod_name];
}, 0);

console.log(total);
