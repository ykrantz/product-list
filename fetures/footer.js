function createAppFotter() {
  const $messageP = elementGenerator("p", "messageP", "messageP");
  const $messageDiv = elementGenerator("div", "messageDiv", "messageDiv");
  $messageDiv.append($messageP);
  document.getElementById("appFooter").append($messageDiv);
}

function alertMessage(text, isEror = false) {
  console.log(text);
  const $messageP = document.getElementById("messageP");
  console.log($messageP, 34, text);
  const originalMessageClass = $messageP.className;
  if (isEror === true) {
    console.log($messageP.className, 28);
    $messageP.className += " erorMessage";
    console.log($messageP.className, 29);
  }
  $messageP.innerHTML = text;
  setTimeout(() => {
    $messageP.className = originalMessageClass;
    $messageP.innerHTML = "";
  }, SCONDES_TO_SHOW_EROR * 1000 + 2000);
}
