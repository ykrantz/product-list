function createAppFotter() {
  const $messageP = elementGenerator("p", "messageP", "messageP");
  const $messageDiv = elementGenerator("div", "messageDiv", "messageDiv");
  $messageDiv.append($messageP);
  document.getElementById("appFooter").append($messageDiv);
}

function alertMessage(text, isEror = false) {
  const $messageP = document.getElementById("messageP");
  const originalMessageClass = $messageP.className;
  if (isEror === true) {
    $messageP.className += " erorMessage";
  }
  $messageP.innerHTML = text;
  setTimeout(() => {
    $messageP.className = originalMessageClass;
    $messageP.innerHTML = "";
  }, SCONDES_TO_SHOW_EROR * 1000 + 2000);
}
