function getGeneratePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

function getMatchPin() {
  const pin = getGeneratePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getMatchPin();
  }
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getMatchPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const typedNumbersField = document.getElementById("typed-numbers");
  const previousTypedNumbers = typedNumbersField.value;

  if (isNaN(number)) {
    if (number === "C") {
      typedNumbersField.value = "";
    } else if (number === "<") {
      const digits = previousTypedNumbers.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedNumbersField.value = remainingDigits;
    }
  } else {
    const newTypedNumber = previousTypedNumbers + number;
    typedNumbersField.value = newTypedNumber;
  }
});

document.getElementById("verify-pin").addEventListener("click", function () {
  const displayPinField = document.getElementById("display-pin");
  const currentPin = displayPinField.value;

  const typedNumbersField = document.getElementById("typed-numbers");
  const typedNumbers = typedNumbersField.value;

  const successPin = document.getElementById("pin-success");
  const failurePin = document.getElementById("pin-failure");

  if (currentPin === typedNumbers) {
    successPin.style.display = "block";
    failurePin.style.display = "none";
  } else {
    successPin.style.display = "none";
    failurePin.style.display = "block";
  }
});
