export function Product(id, prdName, price, description) {
  this.id = id;
  this.prdName = prdName;
  this.price = price;
  this.description = description;
}

export function ErorLog(message = "", elementId = "") {
  this.message = message;
  this.elementId = elementId;
}

export const SCONDES_TO_SHOW_EROR = 0.5;
export const MAX_PRODUCT_NAME_LENGTH = 10;
export const MAX_PRODUCT_PRICE = 10000;
export const MAX_PRODUCT_DESCREPTION_LENGTH = 200;

export const INIT_PRODUCT_LIST = [
  new Product(1, "item 1", "10", "ball"),
  new Product(2, "item 2", "33", "apple"),
  new Product(3, "item 3", "55", "basket"),
];
// module.exports.INPUT_TYPES = ["name", "price", "description"];
export const INPUT_TYPES = ["name", "price", "description"];
// module.exports.INIT_PRODUCT_LIST = [
//   new Product(1, "item 1", "10", "ball"),
//   new Product(2, "item 2", "33", "apple"),
//   new Product(3, "item 3", "55", "basket"),
// ];

// module.exports = { INIT_PRODUCT_LIST, INPUT_TYPES };
// export default { INIT_PRODUCT_LIST, INPUT_TYPES };
