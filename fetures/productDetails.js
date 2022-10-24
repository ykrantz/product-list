import { productList } from "../main.js";
import { elementGenerator } from "../utils/elementGeneratores.js";
import {
  clearChildrenFromParent,
  getProductDetailsById,
} from "../utils/generalFunctions.js";

export function createProductDetailsContainer() {
  const $productDetalisTitle = elementGenerator(
    "h2",
    "productDetalisTitle",
    "subTitles",
    "Product Detalis:"
  );

  const $productDetalisContainer = elementGenerator(
    "div",
    "productDetalisContainer",
    "productDetalisContainer"
  );
  document
    .getElementById("productDetails")
    .append($productDetalisTitle, $productDetalisContainer);

  createProductDetails(productList[0]?.id);
}

export function createProductDetails(productId) {
  clearChildrenFromParent("productDetalisContainer");
  if (!productId) return;

  const productDetails = getProductDetailsById(productId);
  const $productDetalisContainer = document.getElementById(
    "productDetalisContainer"
  );

  if (!$productDetalisContainer) return;

  for (let productType in productDetails) {
    if (productType === "id") {
      continue;
    }

    const $newDetail = elementGenerator(
      "p",
      `productDetailId`,
      "productDetails",
      `<b>${productType === "prdName" ? "name" : productType}:</b> ${
        productDetails[productType]
      }`
    );
    $productDetalisContainer.append($newDetail);
  }
}
