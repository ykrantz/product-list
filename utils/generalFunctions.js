import { productList } from "../main.js";

export function clearChildrenFromParent(parentId) {
  const $parentId = document.getElementById(parentId);

  while ($parentId?.firstChild) {
    $parentId.removeChild($parentId.firstChild);
  }
  console.log("productlist was clear");
}

export function getProductElementById(elementType, productId) {
  return document.querySelector(
    `${elementType}[data-product-id="${productId}"]`
  );
}

export function findIndexOfProductInProductList(id) {
  return productList.findIndex((product) => product.id === Number(id));
}

export function getProductDetailsById(id) {
  return productList.find((product) => product.id === Number(id));
}
