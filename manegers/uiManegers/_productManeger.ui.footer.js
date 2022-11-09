import { elementGenerator } from "../utils/elementGeneratores.js";
import { SCONDES_TO_SHOW_EROR } from "../utils/mainVariable.js";

export function UI_createAppFotter() {
  const $messageP = elementGenerator("p", "messageP", "messageP");
  const $gitLink = UI_createGitLink();
  const $messageDiv = elementGenerator("div", "messageDiv", "messageDiv");
  $messageDiv.append($messageP, $gitLink);
  document.getElementById("appFooter").append($messageDiv);
}

export function UI_alertMessage(text, isEror = false) {
  const $messageP = document.getElementById("messageP");
  const originalMessageClass = $messageP.className;
  if (isEror === true) {
    $messageP.className += " erorMessage";
  }
  $messageP.innerHTML = text;
  setTimeout(() => {
    $messageP.className = originalMessageClass;
    $messageP.innerHTML = "";
  }, SCONDES_TO_SHOW_EROR * 1000 + 3000);
}

function UI_createGitLink() {
  const $gitLink = elementGenerator("a", "gitLink", "gitLink", "GitHub");
  $gitLink.href = "https://github.com/ykrantz/product-list";
  $gitLink.target = "_blank";
  return $gitLink;
}
