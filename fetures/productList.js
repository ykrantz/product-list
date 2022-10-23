let choosenProductId = 1;

function createProductsListContainer(choosenId = 1) {
  const $productListTitle = elementGenerator(
    "h3",
    "productListTitle",
    "subTitles",
    "Product List:"
  );
  const $productListUl = elementGenerator("ul", "productListUl");
  document
    .getElementById("productsList")
    .append($productListTitle, $productListUl);

  if (productList.length === 0) return;

  createProductsList(choosenId);
}

function createProductsList(choosenId = 0) {
  clearProductList();
  if (productList.length === 0) return;
  createProductsLi();

  const $choosenProduct = getProductElementById("p", choosenId);
  if ($choosenProduct) {
    $choosenProduct.click();
  }
}

function createProductsLi() {
  const $productListUl = document.getElementById("productListUl");
  for (let product of productList) {
    const $newProduct = createProductLi(product);

    $productListUl.append($newProduct);
  }
}

function createProductLi(product) {
  const $newProduct = elementGenerator(
    "p",
    "productPId",
    "productP",
    product?.prdName
  );
  const productIdNumber = product?.id;

  $newProduct.dataset.productId = productIdNumber;
  const $deleteButton = buttonGenerator(
    deleteProductFromUl,
    "🗑️",
    "deleteProductButtonId",
    "deleteProductButton btn"
  );
  $deleteButton.dataset.productId = productIdNumber;

  const $newProductDiv = elementGenerator("div", "productDivId", "productDiv");
  $newProductDiv.append($newProduct, $deleteButton);

  const $newProductLi = elementGenerator("li", "productLiId", "productLi");
  $newProductLi.dataset.productId = productIdNumber;

  $newProductLi.append($newProductDiv);

  $newProduct.addEventListener("click", handleChoosenProductEvent);
  return $newProductLi;
}

function handleChoosenProductEvent(e) {
  choosenProductId = e.target.dataset.productId;
  handleChoosenProduct();
}

function handleChoosenProduct() {
  changeChoosenProduct(choosenProductId);
  refreshShownProductDetails(choosenProductId);
}

function changeChoosenProduct(choosenProductId) {
  const productsElements = document.getElementsByClassName("productP");
  for ($element of productsElements) {
    $element.className = "productP";
    if ($element.dataset.productId === choosenProductId) {
      $element.className += " choosenProduct ";
    }
  }
}

function deleteProductFromUl(e) {
  const productIdNum = e.target.dataset.productId;

  // update choosen id instead of delted product
  if (productIdNum == choosenProductId) {
    const productIndex = findIndexOfProductInProductList(productIdNum);
    if (productIndex < productList.length - 1) {
      // if product to delete has a former pudact so will choose it. else will show the former
      choosenProductId = productList[productIndex + 1].id;
    } else {
      choosenProductId = productList[productIndex - 1];
    }
  }
  deleteProductFromList(productIdNum);

  createProductsList(choosenProductId);
}

function deleteProductFromList(productId) {
  const productPosition = productList.findIndex((product) => {
    return product.id === Number(productId);
  });

  productList.splice(productPosition, 1);
}

function clearProductList() {
  const $productListUl = document.getElementById("productListUl");
  console.log($productListUl, 14);

  while ($productListUl.firstChild) {
    $productListUl.removeChild($productListUl.firstChild);
  }
  console.log("productlist was clear");
}

function getProductElementById(elementType, productId) {
  return document.querySelector(
    `${elementType}[data-product-id="${productId}"]`
  );
}

function findIndexOfProductInProductList(id) {
  return productList.findIndex((product) => product.id === Number(id));
}
