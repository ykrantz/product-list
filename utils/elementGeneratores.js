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
  return elementHtmlGenerator({
    tag: type,
    attributes: [
      { name: "id", value: idName },
      { name: "class", value: className },
    ],
    innerHTML: innerHTMLText,
  });
}

export function elementHtmlGenerator({ tag, attributes = [], innerHTML = "" }) {
  const $newElement = document.createElement(tag);
  attributes.forEach(({ name, value }) => {
    $newElement.setAttribute(name, value);
  });
  $newElement.innerHTML = innerHTML;
  return $newElement;
}
