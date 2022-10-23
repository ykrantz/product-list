// let $choosenProduct = null;
let choosenProductId = 0;

function createProductsList() {
  const $productListTitle = elementGenerator(
    "h3",
    "productListTitle",
    "subTitles",
    "Product List:"
  );
  const $productListUl = elementGenerator("ul", "productListUl");

  if (productList.length == 0) return;

  createProductsLi($productListUl);
  // for (let product of productList) {
  //   const $newProduct = createProductLi(product);

  //   $productListUl.append($newProduct);
  // }
  // console.log($choosenProduct.innerHTML);
  // const $productsList = document.getElementById("productsList");
  document
    .getElementById("productsList")
    .append($productListTitle, $productListUl);
  // $choosenProduct = document.getElementsByClassName("productP")[0];
  choosenProductId =
    document.getElementsByClassName("productP")[0].dataset.productId;
  // $choosenProduct = document.getElementsByClassName("productLi")[0];
  // TODO:
  // console.log({ $choosenProduct });

  // handleChoosenProduct($choosenProduct);
  // document.getElementById(buttonIdForEnterEvent).click();
  console.log($choosenProduct, 43);
  $choosenProduct.click();
}

function createProductsLi($productListUl) {
  for (let product of productList) {
    const $newProduct = createProductLi(product);

    $productListUl.append($newProduct);
  }
}

function createProductLi(product) {
  const $newProduct = elementGenerator(
    "p",

    `productP_${product?.id}`,
    // `${product?.prdName}`,
    "productP",
    product?.prdName
  );
  const productIdNumber = product?.id;

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

  $newProduct.addEventListener("click", handleChoosenProductEvent);
  return $newProductLi;
}

function handleChoosenProductEvent(e) {
  $choosenProduct = e.target;
  handleChoosenProduct();
  // changeChoosenProduct($choosenProduct);
  // const productIdNum = $choosenProduct.dataset.productId;
  // refreshShownProductDetails(productIdNum);
}
function handleChoosenProduct() {
  changeChoosenProduct($choosenProduct);
  const productIdNum = $choosenProduct.dataset.productId;
  refreshShownProductDetails(productIdNum);
}

function changeChoosenProduct($choosenElement) {
  const productsElements = document.getElementsByClassName("productP");
  // resets all class name of product to defualt class
  for ($element of productsElements) {
    $element.className = "productP";
  }
  $choosenElement.className += " choosenProduct ";
}

function deleteProductFromUl(e) {
  // TODO: check if is a bug: fix bug when delete dosent show coosen background
  const productIdNum = e.target.dataset.productId;
  console.table(productList, 41);
  console.log(productIdNum, e.target);
  deleteProductFromList(productIdNum);
  refreshProductsList();

  console.table(productList, 42);
  // if the product that was delete was shown , need to change disply:
  // if (
  //   productIdNum === document.getElementById("productDetails").dataset.productId
  // ) {
  if (productIdNum === $choosenProduct.dataset.productId) {
    console.log(44);
    // handleChoosenProduct();
    // TODO: fix the logic so will show proporly
    if (productList.length >= productIdNum) {
      // showProductDetails(productIdNum);
      $choosenProduct = getProductPElementbById(productIdNum);
    } else if (productList.length < productIdNum) {
      // showProductDetails(productIdNum - 1);
    } else {
    }
    handleChoosenProduct();
  }
}

function getProductPElementbById(productIdNum) {
  // TODO:
  return document.getElementById(`productP_${productIdNum}`);
}

function refreshProductsList() {
  clearProductList();
  const $productListUl = document.getElementById("productListUl");
  createProductsLi($productListUl);
  // for (let product of productList) {
  // for (let i = 0; i < productList.length; i++) {
  //   // console.log(product, 4);
  //   // const $newProduct = elementGenerator(
  //   //   "li",
  //   //   `${product?.prdName}`,
  //   //   "productLi",
  //   //   product?.prdName
  //   // );

  //   const $newProduct = createProductLi(productList[i], i);
  //   $productListUl.append($newProduct);
  // }

  // const $productsList = document.getElementById("productsList");
  document.getElementById("productsList").append($productListUl);
  // $choosenProduct.click();
}

function clearProductList() {
  const $productListUl = document.getElementById("productListUl");
  console.log($productListUl, 14);

  while ($productListUl.firstChild) {
    $productListUl.removeChild($productListUl.firstChild);
  }
  console.log("productlist was clear");
}

function deleteProductFromList(productId) {
  const productPosition = productList.findIndex((product) => {
    return product.id === Number(productId);
  });

  productList.splice(productPosition, 1);
}
