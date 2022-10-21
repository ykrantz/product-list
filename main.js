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
createAppFotter();
//
//

// ***********
// defenitions:
// ***********

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
  const $appFooter = elementGenerator("div", "appFooter");

  $appContainer.append(
    $appHeader,
    $inputProductDetails,
    $poductContainer,
    $appFooter
  );

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

  for (let i in inputTypes) {
    createInputAndLabel(inputTypes[i], inputTypes[i], "addProduct-button");
  }

  const $addButton = buttonGenerator(
    addProductToList,
    "Add",
    "addProduct-button",
    "btn"
  );
  // const $inputProductDetails = document.getElementById("inputProductDetails");
  document.getElementById("inputProductDetails").append($addButton);
  // console.log(document.getElementsByClassName("productInput")[0], 19);
  document.getElementsByClassName("productInput")[0].focus();
}

function createInputAndLabel(inputName, inputLabel, buttonIdForEnterEvent) {
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
  $newInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById(buttonIdForEnterEvent).click();
    }
  });

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
  // con  sole.log("15");

  productList.length > 0 && showProductDetails(0);
}

function createAppFotter() {
  const $messageDiv = elementGenerator("div", "messageDiv", "messageDiv");
  const $messageP = elementGenerator("p", "messageP", "messageP");
  $messageDiv.append($messageP);
  document.getElementById("appFooter").append($messageDiv);
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
  const $productListUl = document.getElementById("productListUl");
  console.log($productListUl, 14);

  while ($productListUl.firstChild) {
    $productListUl.removeChild($productListUl.firstChild);
  }
  console.log("productlist was clear");
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

  // if the product that was delete was shown , need to change disply:
  if (
    productIdNum === document.getElementById("productDetails").dataset.productId
  ) {
    // TODO: fix the logic so will show proporly
    if (productList.length - 1 > productIdNum) {
      showProductDetails(productIdNum);
    } else if (productList.length - 1 === productIdNum - 1) {
      showProductDetails(productIdNum - 1);
    } else {
    }
  }
  // document.getElementById("productDetails").dataset.productId = productIdNum;
  // TODO: finish
}

function addProductToList() {
  //   TODO: check using form to get value and delete
  try {
    const $nameInput = document.getElementById("nameInput");
    const $priceInput = document.getElementById("priceInput");
    const $descriptionInput = document.getElementById("descriptionInput");

    //TODO:  check valid input
    checkStringInput(
      $nameInput.value,
      MAX_PRODUCT_NAME_LENGTH,
      "name",
      "nameInput"
    );
    checkNumberInput(
      $priceInput.value,
      MAX_PRODUCT_PRICE,
      "price",
      "priceInput"
    );
    checkStringInput(
      $descriptionInput.value,
      MAX_PRODUCT_DESCREPTION_LENGTH,
      "description",
      "descriptionInput"
    );

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
  } catch (e) {
    console.log(`erro: ${e.message}`);
    alertMessage(e.message, true);
    console.log(e?.elementId, 25);
    if (e?.elementId) {
      console.log(26);
      const $elementWithEror = document.getElementById(e.elementId);
      // $elementId.focus();
      // console.log($elementId);

      if ($elementWithEror) {
        handleErorInElement($elementWithEror);
      }
    }
  }
}
function handleErorInElement($elementWithEror) {
  $elementWithEror.focus();
  let originalClassName = $elementWithEror.className;

  $elementWithEror.className += " eror";
  setTimeout(() => {
    $elementWithEror.className = originalClassName;
  }, SCONDES_TO_SHOW_EROR * 1000);
  console.log($elementWithEror.className, 22);
}

function showProductDetails(productIdNum = 0) {
  if (productList.length === 0) return;

  const productDetails = productList[productIdNum];
  for (let productType in inputTypes) {
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
    // console.log(productDetails[productType], 17, productType);

    document.getElementById(
      `product${
        inputTypes[productType].charAt(0).toUpperCase() +
        inputTypes[productType].substring(1)
      }`
    ).innerHTML = productDetails[productType];
  }
  document.getElementById("productDetails").dataset.productId = productIdNum;
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
    idName,
    className,
    innerHTMLText
  );
  $newButton.addEventListener("click", onClickFunc);
  // console.log("created botion", $newButton);
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

function alertMessage(text, isEror = false) {
  // TODO: make in the page
  // alert(text);

  console.log(text);
  const $messageP = document.getElementById("messageP");
  console.log($messageP, 34);
  const originalMessageClass = $messageP.className;
  if (isEror === true) {
    console.log($messageP.className, 28);
    $messageP.className += " erorMessage";
    console.log($messageP.className, 29);
  }
  $messageP.innerHTML = text;
  setTimeout(() => {
    $messageP.className = originalMessageClass;
    $messageP.innerHTML = "";
  }, SCONDES_TO_SHOW_EROR * 1000);
}

// ***********
// validation functions:
// ***********
function checkStringInput(
  inputValue,
  max = 20,
  fieldName = "",
  elementId = ""
) {
  // if (!inputValue) throw `empty ${fieldName} input. please enter letters`;
  if (!inputValue)
    throw new ErorLog(
      `empty ${fieldName} input. please enter letters`,
      elementId
    );
  // if (!inputValue)
  //   throw new Eror(`empty ${fieldName} input. please enter letters`);
  if (inputValue.length > max)
    throw new ErorLog(
      ` please insert text less then ${max} in ${fieldName} input . You entered  ${inputValue.length} letters`,
      elementId
    );
  // TODO: FIX REGEX when jkkj23423
  // var regexTextRoles = /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g;
  var regexTextRoles = /[0-9!@#\$%\^\&*\)\(+=._-]/;
  // var regexTextRoles = /[0-9]/;
  console.log(inputValue, 16);
  console.log(inputValue.search(regexTextRoles), 17);
  console.log(regexTextRoles.test(inputValue), 18);
  // if (inputValue.search(regexTextRoles) >= 0) {
  //   throw new ErorLog(
  //     `no numbers or sighns allowed in ${fieldName} input`,
  //     elementId
  //   );

  if (regexTextRoles.test(inputValue)) {
    throw new ErorLog(
      `no numbers or simbols allowed in ${fieldName} input`,
      elementId
    );
  }
}
function checkNumberInput(inputValue, max = 10000, fieldName = "", elementId) {
  if (!inputValue)
    throw new ErorLog(
      `empty ${fieldName} input. please enter number`,
      elementId
    );

  // var regexTextRoles = /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g;

  if (isNaN(Number(inputValue))) {
    throw new ErorLog(
      `Not a number in ${fieldName} input. Please enter a number`,
      elementId
    );
  }
  // if (inputValue.search(regexTextRoles) >= 0) {
  //   throw `no numbers or sighns allowed in ${fieldName} input`;
  // }
  if (inputValue > max)
    throw new ErorLog(
      ` please insert number less then ${max} in ${fieldName} input `,
      elementId
    );
}
