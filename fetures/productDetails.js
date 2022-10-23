function createProductDetailsContainer() {
  const $productDetalisTitle = elementGenerator(
    "h3",
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

function createProductDetails(productId) {
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
