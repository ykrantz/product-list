export function buttonGenerator(
  onClickFunc,
  innerHTMLText = "",
  idName = `button-id`,
  className = `button-${idName}`
) {
  const $newButton = elementGenerator(
    "button",
    idName,
    className,
    innerHTMLText
  );
  $newButton.addEventListener("click", onClickFunc);
  return $newButton;
}

export function elementGenerator(
  type,
  idName = `${type}-id`,
  className = `${type}-${idName}`,
  innerHTMLText = ""
) {
  const $newElement = document.createElement(type);

  $newElement.setAttribute("id", idName);

  $newElement.setAttribute("class", className);

  $newElement.innerHTML = innerHTMLText;
  return $newElement;
}
