import { elementGenerator } from "../utils/elementGeneratores.js";

export function createAppHeader() {
  const $newTitle = elementGenerator(
    "h1",
    "mainTitle",
    "title",
    "Product List"
  );

  document.getElementById("appHeader").append($newTitle);
}
