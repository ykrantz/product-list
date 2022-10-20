const INPUT_TYPES = ["name", "price", "description"];
const INIT_PRODUCT_LIST = [new Product(0, "item1", "10", "test")];

const inputTypes = INPUT_TYPES;

const productList = INIT_PRODUCT_LIST;

const $app = document.getElementById("app");
// ***********
// create app:
// ***********
createMainAppContainer();
createAppHeader();
createInputProductDetails();
// createProductsContainer();
createProductsList();
createProductDetails();
//
//

// ***********
// defenitions:
// ***********

function Product(id, prdName, price, description) {
  // TODO: check if to make as class
  this.id = id;
  this.prdName = prdName;
  this.price = price;
  this.description = description;
}

// ***********
// create elements functions:
// ***********

function createMainAppContainer() {
  const $appContainer = elementGenerator("div", "appContainer");
  //   const mainDiv = ["inputProductDetails", "productsList", "productDetails"];
  const $appHeader = elementGenerator("div", "appHeader");
  const $inputProductDetails = elementGenerator("div", "inputProductDetails");
  const $poductContainer = elementGenerator("div", "poductContainer");
  const $productsList = elementGenerator("div", "productsList");
  const $productDetails = elementGenerator("div", "productDetails");
  $poductContainer.append($productsList, $productDetails);

  $appContainer.append($appHeader, $inputProductDetails, $poductContainer);

  document.getElementById("app").append($appContainer);
  console.log("app was created");
}

function createAppHeader() {
  // const $appHeader = document.getElementById("appHeader");
  const $newTitle = elementGenerator(
    "h1",
    "mainTitle",
    "title",
    "Product List"
  );

  document.getElementById("appHeader").append($newTitle);
}

function createInputProductDetails() {
  //   const inputTypes = ["name", "price", "description"];

  for (let i of inputTypes) {
    createInputAndLabel(i, i);
  }

  const $addButton = buttonGenerator(
    addProductToList,
    "Add",
    "addProduct-button",
    "btn"
  );
  // const $inputProductDetails = document.getElementById("inputProductDetails");
  document.getElementById("inputProductDetails").append($addButton);
}

function createInputAndLabel(inputName, inputLabel) {
  const $newLabel = elementGenerator(
    "label",
    `${inputLabel}Label`,
    "productInputLable",
    inputLabel
  );
  $newLabel.type = "text";

  const $newInput = elementGenerator(
    "input",
    `${inputName}Input`,
    "productInput"
  );
  $newInput.type = "text";
  $newInput.placeholder = `please fill ${inputName}`;

  const $inputDiv = elementGenerator(
    "div",
    `${inputName}-inputDivId`,
    "inputDiv"
  );
  $inputDiv.className = "inputDiv";
  $inputDiv.append($newLabel, $newInput);
  // const $inputProductDetails = document.getElementById("inputProductDetails");
  document.getElementById("inputProductDetails").append($inputDiv);
}

// function createProductsContainer() {
//   const $productsContainer = elementGenerator("div", "productsContainer");
// }
function createProductsList() {
  const $productListUl = elementGenerator("ul", "productListUl");

  // for (let product of productList) {
  for (let i = 0; i < productList.length; i++) {
    // console.log(product, 4);
    // const $newProduct = elementGenerator(
    //   "li",
    //   `${product?.prdName}`,
    //   "productLi",
    //   product?.prdName
    // );
    const $newProduct = createProductLi(productList[i], i);

    $productListUl.append($newProduct);
  }

  // const $productsList = document.getElementById("productsList");
  document.getElementById("productsList").append($productListUl);
}

function createProductDetails() {
  const $productName = elementGenerator("p", "productName", "productDetails");
  const $productPrice = elementGenerator("p", "productPrice", "productDetails");
  const $productDescription = elementGenerator(
    "p",
    "productDescription",
    "productDetails"
  );

  // const $productDetails = elementGenerator(
  //   "div",
  //   "productDetails",
  //   "productDetailsDiv"
  // );
  document
    .getElementById("productDetails")
    .append($productName, $productPrice, $productDescription);
  console.log("15");
}

function refreshProductsList() {
  // TODO: delete existing UL and fix
  clearProductList();
  // debugger;
  const $productListUl = document.getElementById("productListUl");

  // for (let product of productList) {
  for (let i = 0; i < productList.length; i++) {
    // console.log(product, 4);
    // const $newProduct = elementGenerator(
    //   "li",
    //   `${product?.prdName}`,
    //   "productLi",
    //   product?.prdName
    // );

    const $newProduct = createProductLi(productList[i], i);
    $productListUl.append($newProduct);
  }

  // const $productsList = document.getElementById("productsList");
  document.getElementById("productsList").append($productListUl);
}

function clearProductList() {
  // TODO:CHECK
  const $productListUl = document.getElementById("productListUl");
  console.log($productListUl, 14);

  // $productListUl.innerHTML = "";

  while ($productListUl.firstChild) {
    $productListUl.removeChild($productListUl.firstChild);
  }
  console.log("productlist was clear");
  // debugger;
}
// ***********
// main functions:
// ***********

// function createProductLi1(product, productIdNumber) {
//   const $newProduct = elementGenerator(
//     "li",
//     `${product?.prdName}`,
//     "productLi",
//     product?.prdName
//   );
//   $newProduct.dataset.productId = productIdNumber;
//   const $deleteButton = buttonGenerator(
//     deleteProductFromUl,
//     "X",
//     `deleteProductButton_${productIdNumber}`,
//     "deleteProductButton"
//   );
//   $deleteButton.dataset.productId = productIdNumber;
//   $newProduct.append($deleteButton);
//   console.log($newProduct, 11);
//   return $newProduct;
// }

function createProductLi(product, productIdNumber) {
  const $newProduct = elementGenerator(
    "p",
    `${product?.prdName}`,
    "productP",
    product?.prdName
  );
  $newProduct.dataset.productId = productIdNumber;
  const $deleteButton = buttonGenerator(
    deleteProductFromUl,
    "X",
    `deleteProductButton_${productIdNumber}`,
    "deleteProductButton"
  );
  $deleteButton.dataset.productId = productIdNumber;
  const $newProductDiv = elementGenerator(
    "div",
    `${product?.prdName}Div`,
    "productDiv"
  );
  $newProductDiv.append($newProduct, $deleteButton);
  const $newProductLi = elementGenerator(
    "li",
    `${product?.prdName}Li`,
    "productLi"
  );
  $newProductLi.dataset.productId = productIdNumber;

  $newProductLi.append($newProductDiv);
  $newProductLi.addEventListener("click", refreshShownProductDetails);
  // console.log($newProduct, 11);
  return $newProductLi;
}

function deleteProductFromUl(e) {
  const productIdNum = e.target.dataset.productId;
  console.log(productIdNum, e.target);
  deleteProductFromList(productIdNum);
  refreshProductsList();
  // TODO: finish
}

function addProductToList() {
  //   TODO: check using form to get value and delete

  const $nameInput = document.getElementById("nameInput");
  const $priceInput = document.getElementById("priceInput");
  const $descriptionInput = document.getElementById("descriptionInput");

  //TODO:  check valid input

  const newProduct = new Product(
    productList.length,
    $nameInput.value,
    $priceInput.value,
    $descriptionInput.value
  );
  productList.push(newProduct);

  console.log("product was added", newProduct);

  const $newProduct = createProductLi(newProduct, productList.length - 1);
  document.getElementById("productListUl").append($newProduct);
  clearInputs();
}

function showProductDetails(productIdNum) {
  const productDetails = productList[productIdNum];
  for (let productType of INPUT_TYPES) {
    // console.log(
    //   `product${
    //     productType.charAt(0).toUpperCase() + productType.substring(1)
    //   }`,
    //   document.getElementById(
    //     `product${
    //       productType.charAt(0).toUpperCase() + productType.substring(1)
    //     }`
    //   ),
    //   16
    // );
    console.log(productDetails[productType], 17, productType);

    document.getElementById(
      `product${productType.charAt(0).toUpperCase() + productType.substring(1)}`
    ).innerHTML = productDetails[productType];
  }
}

function refreshShownProductDetails(e) {
  const productIdNum = e.target.dataset.productId;

  showProductDetails(productIdNum);
}

// ***********
// side functions:
// ***********
function deleteProductFromList(productId) {
  productList.splice(productId, productList.length > 0 ? 1 : 0);
}
function clearInputs() {
  const inputsToClear = document.getElementsByClassName("productInput");
  for (let $input of inputsToClear) {
    $input.value = "";
  }
}

function buttonGenerator(
  onClickFunc,
  innerHTMLText = "",
  idName = `button-id`,
  className = `button-${idName}`
) {
  const $newButton = elementGenerator(
    "button",
    "addProduct-button",
    className,
    innerHTMLText
  );
  $newButton.addEventListener("click", onClickFunc);
  console.log("created botion", $newButton);
  return $newButton;
}

function elementGenerator(
  type,
  idName = `${type}-id`,
  className = `${type}-${idName}`,
  innerHTMLText = ""
) {
  const $newElement = document.createElement(type);

  $newElement.setAttribute("id", idName);

  $newElement.setAttribute("class", className);

  $newElement.innerHTML = innerHTMLText;
  return $newElement;
}
