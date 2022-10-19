const $app = document.getElementById("app");

createMainAppContainer();
createInputProductDetails();

//
//
//

// main functions:
function createMainAppContainer() {
  //   const $appContainer = document.createElement("div");
  //   $appContainer.setAttribute("id", "appContainer");

  //   document.createElement("div");
  //   $appContainer.setAttribute("id", "appContainer");

  //   const $inputProductDetails = document.createElement("div");
  //   $inputProductDetails.setAttribute("id", "inputProductDetails");

  //   const $productsList = document.createElement("div");
  //   $productsList.setAttribute("id", "productsList");

  //   const $productDitails = document.createElement("div");
  //   $productDitails.setAttribute("id", "productDitails");

  const $appContainer = elementGenerator("div", "appContainer");
  const $inputProductDetails = elementGenerator("div", "inputProductDetails");
  const $productsList = elementGenerator("div", "productsList");
  const $productDitails = elementGenerator("div", "productDitails");

  $appContainer.append($inputProductDetails, $productsList, $productDitails);

  document.getElementById("app").append($appContainer);
  console.log("created app");
}

// const $productDitails = document.getElementById("productDitails");

function elementGenerator(
  type,
  idName = `${type}-id`,
  className = `${type}-${idName}`
) {
  const $newElement = document.createElement(type);
  $newElement.setAttribute("id", idName);
  $newElement.setAttribute("class", className);
  return $newElement;
}

function createInputProductDetails() {
  const inputTypes = ["name", "price", "description"];

  for (let i of inputTypes) {
    createInputAndLabel(i, i);
  }
}

function createInputAndLabel(inputName, inputLabel) {
  const $inputProductDetails = document.getElementById("inputProductDetails");

  //   const $newLabel = document.createElement("label");
  const $newLabel = elementGenerator(
    "label",
    `${inputLabel}Label`,
    "productInputLable"
  );
  $newLabel.type = "text";
  //   $newLabel.className = "productInputLable";
  $newLabel.innerHTML = inputLabel;

  //   const $newInput = document.createElement("input");
  const $newInput = elementGenerator(
    "input",
    `${inputName}Input`,
    "productInput"
  );
  $newInput.type = "text";
  //   $newInput.className = "productInput";
  //   $newInput.id = `${inputName}Input`;

  const $inputDiv = document.createElement("div");
  $inputDiv.className = "inputDiv";
  $inputDiv.append($newLabel, $newInput);

  $inputProductDetails.append($inputDiv);
}
