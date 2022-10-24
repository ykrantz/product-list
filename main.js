// const { INPUT_TYPES, INIT_PRODUCT_LIST } = require("./utils/mainVariable");
// {INPUT_TYPES,INIT_PRODUCT_LIST}=re

import { createAddNewProductWithDetails } from "./fetures/addNewProduct.js";
import { createAppFotter } from "./fetures/footer.js";
import { createAppHeader } from "./fetures/header.js";
import { createProductDetailsContainer } from "./fetures/productDetails.js";
import { createProductsListContainer } from "./fetures/productList.js";
import { elementGenerator } from "./utils/elementGeneratores.js";
import { INIT_PRODUCT_LIST, INPUT_TYPES } from "./utils/mainVariable.js";

// import { INPUT_TYPES, INIT_PRODUCT_LIST } from ("./utils/mainVariable");

// const { INPUT_TYPES, INIT_PRODUCT_LIST } = require("./utils/mainVariable");

// import { INIT_PRODUCT_LIST, INPUT_TYPES } from "./utils/mainVariable";

// const inputTypes = INPUT_TYPES;

export const productList = INIT_PRODUCT_LIST;

const $app = document.getElementById("app");
createApp();

function createApp() {
  createMainAppStructore();

  // create Features and render to app:
  createAppHeader();
  createAddNewProductWithDetails();
  createProductsListContainer(1);
  createProductDetailsContainer();
  createAppFotter();

  console.log("app was created");
}

function createMainAppStructore() {
  const $appContainer = elementGenerator("div", "appContainer");
  const $appHeader = elementGenerator("div", "appHeader");
  const $inputProductDetails = elementGenerator("div", "inputProductDetails");
  const $poductContainer = elementGenerator("div", "poductContainer");
  const $productsList = elementGenerator("div", "productsList");
  const $productDetails = elementGenerator("div", "productDetails");
  $poductContainer.append($productsList, $productDetails);
  const $appFooter = elementGenerator("div", "appFooter");

  $appContainer.append(
    $appHeader,
    $inputProductDetails,
    $poductContainer,
    $appFooter
  );

  document.getElementById("app").append($appContainer);
}
