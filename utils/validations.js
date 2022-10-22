function checkStringInput(
  inputValue,
  max = 20,
  fieldName = "",
  elementId = ""
) {
  // if (!inputValue) throw `empty ${fieldName} input. please enter letters`;
  if (!inputValue)
    throw new ErorLog(
      `empty ${fieldName} input. please enter letters`,
      elementId
    );
  // if (!inputValue)
  //   throw new Eror(`empty ${fieldName} input. please enter letters`);
  if (inputValue.length > max)
    throw new ErorLog(
      ` please insert text less then ${max} in ${fieldName} input . You entered  ${inputValue.length} letters`,
      elementId
    );
  // var regexTextRoles = /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g;
  var regexTextRoles = /[0-9!@#\$%\^\&*\)\(+=._-]/;
  // var regexTextRoles = /[0-9]/;
  console.log(inputValue, 16);
  console.log(inputValue.search(regexTextRoles), 17);
  console.log(regexTextRoles.test(inputValue), 18);
  // if (inputValue.search(regexTextRoles) >= 0) {
  //   throw new ErorLog(
  //     `no numbers or sighns allowed in ${fieldName} input`,
  //     elementId
  //   );

  if (regexTextRoles.test(inputValue)) {
    throw new ErorLog(
      `no numbers or simbols allowed in ${fieldName} input`,
      elementId
    );
  }
}
function checkNumberInput(inputValue, max = 10000, fieldName = "", elementId) {
  if (!inputValue)
    throw new ErorLog(
      `empty ${fieldName} input. please enter number`,
      elementId
    );

  // var regexTextRoles = /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g;

  if (isNaN(Number(inputValue))) {
    throw new ErorLog(
      `Not a number in ${fieldName} input. Please enter a number`,
      elementId
    );
  }
  // if (inputValue.search(regexTextRoles) >= 0) {
  //   throw `no numbers or sighns allowed in ${fieldName} input`;
  // }
  if (inputValue > max)
    throw new ErorLog(
      ` please insert number less then ${max} in ${fieldName} input `,
      elementId
    );
}
