const receipt1 = {
  person: "Violet",
  order: {
    toy: "Malabu Barbie",
    price: 22,
    accessories: ["Barbie Dream Car", "Barbie Dream House", "Malabu Ken"],
    orderPaid: true,
  },
};

const receipt2 = {
  person: "Billy",
  order: {
    toy: "Ninja Tutrles",
    price: 30,
    accessories: ["Tutrle Tank", "Pizza", "Sewer Playset"],
    orderPaid: false,
  },
};

const receipt3 = {
  person: "Taylor",
  order: {
    toy: "Easy Bake Oven",
    price: 22,
    accessories: ["Refills - Set of 4", "Heart Shaped Pan", "Chef Costume Set"],
    orderPaid: true,
  },
};

module.exports = [receipt1, receipt2, receipt3];
