import { ErorLog } from "./mainVariable.js";

export function checkStringInput(
  inputValue,
  max = 20,
  fieldName = "",
  elementId = ""
) {
  if (!inputValue)
    throw new ErorLog(
      `empty ${fieldName} input. please enter letters`,
      elementId
    );

  if (inputValue.length > max)
    throw new ErorLog(
      ` please insert text less then ${max} in ${fieldName} input . You entered  ${inputValue.length} letters`,
      elementId
    );
  var regexTextRoles = /[0-9!@#\$%\^\&*\)\(+=._-]/;

  if (regexTextRoles.test(inputValue)) {
    throw new ErorLog(
      `no numbers or simbols allowed in ${fieldName} input`,
      elementId
    );
  }
}
export function checkNumberInput(
  inputValue,
  max = 10000,
  fieldName = "",
  elementId
) {
  if (!inputValue)
    throw new ErorLog(
      `empty ${fieldName} input. please enter number`,
      elementId
    );

  if (isNaN(Number(inputValue))) {
    throw new ErorLog(
      `Not a number in ${fieldName} input. Please enter a number`,
      elementId
    );
  }

  if (inputValue > max)
    throw new ErorLog(
      ` please insert number less then ${max} in ${fieldName} input `,
      elementId
    );
}
