const productNextId = INIT_PRODUCT_LIST.length + 1;

function createAddNewProductWithDetails() {
  const $inputDetailsDiv = elementGenerator(
    "div",
    "inputDetailsDiv",
    "inputDetailsDiv"
  );

  for (let i in inputTypes) {
    // passes the value of key of the input details types. so can be defrent key and description
    const $inputDiv = createInputAndLabel(
      inputTypes[i],
      inputTypes[i],
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
  //   TODO: check using form to get value and delete
  try {
    const $nameInput = document.getElementById("nameInput");
    const $priceInput = document.getElementById("priceInput");
    const $descriptionInput = document.getElementById("descriptionInput");

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
      // TODO: define the correct id
      productList.length,
      $nameInput.value,
      $priceInput.value,
      $descriptionInput.value
    );
    productList.push(newProduct);

    console.log("product was added", newProduct);
    console.table(productList);

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
        handleErorInInput($elementWithEror);
      }
    }
  }
}

function handleErorInInput($elementWithEror) {
  $elementWithEror.focus();
  let originalClassName = $elementWithEror.className;

  $elementWithEror.className += " eror";
  setTimeout(() => {
    $elementWithEror.className = originalClassName;
  }, SCONDES_TO_SHOW_EROR * 1000);
  console.log($elementWithEror.className, 22);
}
