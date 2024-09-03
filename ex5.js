const y = {
  0: {
    id: "123",
    name: "Achilleas",
  },
  1: {
    id: "133",
    name: "Ioanna",
  },
};

// Find the item with id: 133.
//  Should log ["1", {"id":"133","name":"Ioanna"}]

const result = Object.entries(y).find(([key, value]) => value.id === "133");

console.log("result", result);
