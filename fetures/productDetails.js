function createProductDetails() {
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
  const $productName = elementGenerator(
    "p",
    "productName",
    "productDetails : "
  );
  const $productPrice = elementGenerator("p", "productPrice", "productDetails");
  const $productDescription = elementGenerator(
    "p",
    "productDescription",
    "productDetails"
  );
  // const $productDetails = elementGenerator(
  //   "div",
  //   "productDetails",
  //   "productDetailsDiv"
  // );
  $productDetalisContainer.append(
    $productName,
    $productPrice,
    $productDescription
  );
  document
    .getElementById("productDetails")
    .append($productDetalisTitle, $productDetalisContainer);
  // con  sole.log("15");

  productList.length > 0 && showProductDetails(0);
}

function showProductDetails(productIdNum = 0) {
  if (productList.length === 0) return;

  const productDetails = productList[productIdNum];
  for (let productType in inputTypes) {
    // console.log(
    //   `product${
    //     productType.charAt(0).toUpperCase() + productType.substring(1)
    //   }`,
    //   document.getElementById(
    //     `product${
    //       productType.charAt(0).toUpperCase() + productType.substring(1)
    //     }`
    //   ),
    //   16
    // );
    // console.log(productDetails[productType], 17, productType);

    document.getElementById(
      `product${
        inputTypes[productType].charAt(0).toUpperCase() +
        inputTypes[productType].substring(1)
      }`
    ).innerHTML = `<b>${
      productType === "prdName" ? "name" : productType
    }:</b> ${productDetails[productType]}`;
  }
  document.getElementById("productDetails").dataset.productId = productIdNum;
}

function refreshShownProductDetails(productIdNum) {
  // const productIdNum = e.target.dataset.productId;

  showProductDetails(productIdNum);
}
