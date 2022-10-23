let productNextId = INIT_PRODUCT_LIST.length + 1;

function createAddNewProductWithDetails() {
  const $inputDetailsDiv = elementGenerator(
    "div",
    "inputDetailsDiv",
    "inputDetailsDiv"
  );

  for (let inputType of inputTypes) {
    // passes the value of key of the input details types. so can be defrent key and description
    const $inputDiv = createInputAndLabel(
      inputType,
      inputType,
      "addProduct-button"
    );

    $inputDetailsDiv.append($inputDiv);
  }

  document.getElementById("inputProductDetails").append($inputDetailsDiv);

  const $addButton = buttonGenerator(
    addProductToList,
    "➕",
    "addProduct-button",
    "btn"
  );
  document.getElementById("inputProductDetails").append($addButton);
  document.getElementsByClassName("productInput")[0].focus();
}

function createInputAndLabel(inputName, inputLabel, buttonIdForEnterEvent) {
  const $newLabel = elementGenerator(
    "label",
    `${inputLabel}Label`,
    "productInputLable",
    inputLabel
  );

  const $newInput = elementGenerator(
    "input",
    `${inputName}Input`,
    "productInput"
  );
  $newInput.type = "text";
  $newInput.placeholder = `please fill ${inputName}`;

  // define adding product when press enter
  $newInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
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

  return $inputDiv;
}

function addProductToList() {
  try {
    const $nameInput = document.getElementById("nameInput");
    const $priceInput = document.getElementById("priceInput");
    const $descriptionInput = document.getElementById("descriptionInput");

    // TODO:import
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
    // TODO: import
    const newProduct = new Product(
      productNextId,
      $nameInput.value,
      $priceInput.value,
      $descriptionInput.value
    );
    productList.push(newProduct);

    console.log("product was added");
    // TODO: import
    const $newProduct = createProductLi(newProduct);
    document.getElementById("productListUl").append($newProduct);
    // if all list was delete and its the first product in list. will choose it for details
    if (productList.length === 1) {
      const $choosenProduct = getProductElementById("p", productNextId);

      $choosenProduct.click();
    }
    productNextId++;

    clearInputs();
  } catch (e) {
    console.log(`error: ${e.message}`);
    // if didn't pass verification, will show the eror in the footer:
    alertMessage(e.message, true);
    if (e?.elementId) {
      const $elementWithEror = document.getElementById(e.elementId);

      if ($elementWithEror) {
        handleErorInInput($elementWithEror);
      }
    }
  }
}

function clearInputs() {
  const inputsToClear = document.getElementsByClassName("productInput");
  for (let $input of inputsToClear) {
    $input.value = "";
  }
}

function handleErorInInput($elementWithEror) {
  $elementWithEror.focus();
  let originalClassName = $elementWithEror.className;

  $elementWithEror.className += " eror";
  setTimeout(() => {
    $elementWithEror.className = originalClassName;
  }, SCONDES_TO_SHOW_EROR * 1000);
}
