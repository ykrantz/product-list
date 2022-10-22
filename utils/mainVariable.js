// const SCONDES_TO_SHOW_EROR = 1;
// const MAX_PRODUCT_NAME_LENGTH = 10;
// const MAX_PRODUCT_PRICE = 10;
// const MAX_PRODUCT_DESCREPTION_LENGTH = 10;
// const INPUT_TYPES = {
//   prdName: "name",
//   price: "price",
//   description: "description",
// };
// const INIT_PRODUCT_LIST = [
//   new Product(0, "item 1", "10", "ball"),
//   new Product(0, "item 2", "33", "apple"),
//   new Product(0, "item 3", "55", "basket"),
// ];
function Product(id, prdName, price, description) {
  // TODO: check if to make as class
  this.id = id;
  this.prdName = prdName;
  this.price = price;
  this.description = description;
}

function ErorLog(message = "", elementId = "") {
  this.message = message;
  this.elementId = elementId;
}

const SCONDES_TO_SHOW_EROR = 1;
const MAX_PRODUCT_NAME_LENGTH = 10;
const MAX_PRODUCT_PRICE = 1000;
const MAX_PRODUCT_DESCREPTION_LENGTH = 200;

const INPUT_TYPES = {
  prdName: "name",
  price: "price",
  description: "description",
};
const INIT_PRODUCT_LIST = [
  new Product(1, "item 1", "10", "ball"),
  new Product(2, "item 2", "33", "apple"),
  new Product(3, "item 3", "55", "basket"),
];
