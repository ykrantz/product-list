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
createProductsList();
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
  //   const mainDiv = ["inputProductDetails", "productsList", "productDitails"];
  const $appHeader = elementGenerator("div", "appHeader");
  const $inputProductDetails = elementGenerator("div", "inputProductDetails");
  const $productsList = elementGenerator("div", "productsList");
  const $productDitails = elementGenerator("div", "productDitails");

  $appContainer.append(
    $appHeader,
    $inputProductDetails,
    $productsList,
    $productDitails
  );

  document.getElementById("app").append($appContainer);
  console.log("app was created");
}

function createAppHeader() {
  const $appHeader = document.getElementById("appHeader");
  const $newTitle = elementGenerator(
    "h1",
    "mainTitle",
    "title",
    "Product List"
  );

  $appHeader.append($newTitle);
}

function createInputProductDetails() {
  //   const inputTypes = ["name", "price", "description"];

  for (let i of inputTypes) {
    createInputAndLabel(i, i);
  }

  const $inputProductDetails = document.getElementById("inputProductDetails");
  const $addButton = buttonGenerator(
    addProductToList,
    "Add",
    "addProduct-button",
    "btn"
  );
  $inputProductDetails.append($addButton);
}

function createInputAndLabel(inputName, inputLabel) {
  const $inputProductDetails = document.getElementById("inputProductDetails");

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

  $inputProductDetails.append($inputDiv);
}

function createProductsList() {
  // TODO: delete existing UL

  const $productListUl = elementGenerator("ul");

  for (let product of productList) {
    console.log(product, 4);
    const $newProduct = elementGenerator(
      "li",
      `${product?.prdName}`,
      "productLi",
      product?.prdName
    );
    $productListUl.append($newProduct);
  }

  const $productsList = document.getElementById("productsList");
  $productsList.append($productListUl);
}
// ***********
// main functions:
// ***********

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
  console.log($nameInput);
  //   TODO: add single item to list instead of create product list
  createProductsList();
  clearInputs();
}

// ***********
// side functions:
// ***********

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
