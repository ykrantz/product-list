import { productList } from "../main.js";
import {
  buttonGenerator,
  elementGenerator,
} from "../utils/elementGeneratores.js";
import {
  INIT_PRODUCT_LIST,
  INPUT_TYPES,
  MAX_PRODUCT_DESCREPTION_LENGTH,
  MAX_PRODUCT_NAME_LENGTH,
  MAX_PRODUCT_PRICE,
  Product,
  SCONDES_TO_SHOW_EROR,
} from "../utils/mainVariable.js";
import { checkNumberInput, checkStringInput } from "../utils/validations.js";
import { alertMessage } from "./footer.js";
import { createProductsList } from "./productList.js";

let productNextId = INIT_PRODUCT_LIST.length + 1;

export function createAddNewProductWithDetails() {
  const $inputDetailsFrom = elementGenerator(
    "div",
    "inputDetailsFrom",
    "inputDetailsFrom"
  );
  for (let inputType of INPUT_TYPES) {
    const $inputDiv = createInputAndLabel(
      inputType,
      inputType,
      "addProduct-button"
    );

    $inputDetailsFrom.append($inputDiv);
  }

  document.getElementById("inputProductDetails").append($inputDetailsFrom);

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
  $newInput.name = `${inputName}Input`;
  $newLabel.for = `${inputName}Input`;

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

    // validations:
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
    // if passed validation will add to list and refresh the list:
    const newProduct = new Product(
      productNextId,
      $nameInput.value,
      $priceInput.value,
      $descriptionInput.value
    );
    productList.push(newProduct);

    console.log("product was added");
    createProductsList(productNextId);

    productNextId++;

    clearInputs();
  } catch (e) {
    console.log(`error: ${e}`);
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
