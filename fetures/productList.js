function createProductsList() {
  const $productListTitle = elementGenerator(
    "h3",
    "productListTitle",
    "subTitles",
    "Product List:"
  );
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
  document
    .getElementById("productsList")
    .append($productListTitle, $productListUl);
}

function refreshProductsList() {
  clearProductList();
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
    "🗑️",
    `deleteProductButton_${productIdNumber}`,
    "deleteProductButton btn"
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
  // $newProductLi.addEventListener("click", refreshShownProductDetails);
  // $newProductLi.addEventListener("click", handleChoosenProduct);
  $newProduct.addEventListener("click", handleChoosenProduct);
  // console.log($newProduct, 11);
  return $newProductLi;
}

function deleteProductFromUl(e) {
  const productIdNum = e.target.dataset.productId;
  console.table(productList, 41);
  console.log(productIdNum, e.target);
  deleteProductFromList(productIdNum);
  refreshProductsList();

  console.table(productList, 42);
  // if the product that was delete was shown , need to change disply:
  if (
    productIdNum === document.getElementById("productDetails").dataset.productId
  ) {
    // TODO: fix the logic so will show proporly
    if (productList.length >= productIdNum) {
      showProductDetails(productIdNum);
    } else if (productList.length - 1 === productIdNum - 1) {
      showProductDetails(productIdNum - 1);
    } else {
    }
  }
}

function handleChoosenProduct(e) {
  console.log(e, 37);
  console.log(e.target, 38);
  changeChoosenProduct(e.target);
  // TODO: fix bug when delete dosent show coosen background
  // e.target.className
  const productIdNum = e.target.dataset.productId;
  refreshShownProductDetails(productIdNum);
}

function changeChoosenProduct($choosenElement) {
  console.log($choosenElement, 35);
  const productsElements = document.getElementsByClassName("productP");
  for ($element of productsElements) {
    $element.className = "productP";
  }
  $choosenElement.className += " choosenProduct ";
}

function deleteProductFromList(productId) {
  productList.splice(productId, productList.length > 0 ? 1 : 0);
}
function clearInputs() {
  const inputsToClear = document.getElementsByClassName("productInput");
  for (let $input of inputsToClear) {
    $input.value = "";
  }
}
