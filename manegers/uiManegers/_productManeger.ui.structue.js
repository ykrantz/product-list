import { UI_createAppFotter } from "./_productManeger.ui.footer.js";
import { UI_createAppHeader } from "./_productManeger.ui.header.js";

function UI_createApp() {
  UI_createMainAppStructore();

  UI_createAppFetures();

  console.log("app was created");
}

function UI_createMainAppStructore() {
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

function UI_createAppFetures() {
  UI_createAppHeader();
  // createAddNewProductWithDetails();
  // createProductsListContainer(1);
  // createProductDetailsContainer();
  UI_createAppFotter();
}
