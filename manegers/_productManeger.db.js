import {
  DB_INIT_PRODUCT_LAST_ID,
  DB_INIT_PRODUCT_LIST,
  MAX_PRODUCT_DESCREPTION_LENGTH,
  MAX_PRODUCT_NAME_LENGTH,
  MAX_PRODUCT_PRICE,
  Product,
} from "../utils/mainVariable.js";
import { checkNumberInput, checkStringInput } from "../utils/validations.js";

const DB_prouctList = DB_INIT_PRODUCT_LIST;
let productLastID = DB_INIT_PRODUCT_LAST_ID;

export function DB_createProduct({ name, price, description } = {}) {
  DB_productValidations({ name, price, description });
  const id = DB_increaseId();

  const newProduct = new Product(id, name, price, description);
  DB_prouctList[id] = newProduct;
  console.log("product was added to db", DB_prouctList);
}

export function DB_readOneProduct(id) {
  return DB_prouctList[id];
}
export function DB_readAllProduct(id) {
  return DB_prouctList[id];
}

export function DB_deleteOneProduct(id) {
  delete DB_prouctList[id];
}

// ************
// side functions:
// ************

function DB_increaseId() {
  return ++productLastID;
}

function DB_productValidations({ name, price, description }) {
  checkStringInput(name, MAX_PRODUCT_NAME_LENGTH, "name");

  checkStringInput(name, MAX_PRODUCT_NAME_LENGTH, "name", "nameInput");
  checkNumberInput(price, MAX_PRODUCT_PRICE, "price", "priceInput");
  checkStringInput(
    description,
    MAX_PRODUCT_DESCREPTION_LENGTH,
    "description",
    "descriptionInput"
  );
}

// ***********
// TEST:
// ***********

// DB_createProduct({
//   name: "ffsdfssssssssssssssssssssssss",
//   price: 45,
//   description: "dfdsf",
// });
