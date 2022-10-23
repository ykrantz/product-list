const inputTypes = INPUT_TYPES;

const productList = INIT_PRODUCT_LIST;

const $app = document.getElementById("app");
createApp();

function createApp() {
  createMainAppStructore();

  // create Features and render to app:
  createAppHeader();
  createAddNewProductWithDetails();
  createProductsListContainer(1);
  createProductDetailsContainer();
  createAppFotter();

  console.log("app was created");
}

function createMainAppStructore() {
  const $appContainer = elementGenerator("div", "appContainer");
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
}
