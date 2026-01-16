let input = document.getElementById(`inputBox`);
let buttons = document.querySelectorAll(`button`);

let string = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener(`click`, (e) => {
    let value = e.target.innerHTML;
    if (value == "=") {
      string = eval(string);
      input.value = string;
    } else if (value == "AC") {
      string = "";
      input.value = string;
    } else if (value == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += value;
      input.value = string;
    }
  });
});
// Klaviatura bilan boshqarish
document.addEventListener("keydown", (e) => {
  const key = e.key;

  // Raqamlar va amallar
  if ("0123456789+-*/.".includes(key)) {
    string += key;
    input.value = string;
    return;
  }

  // Enter = hisoblash
  if (key === "Enter" || key === "=") {
    e.preventDefault(); // Enter bosilganda form submit bo‘lsa to‘xtatadi
    try {
      string = eval(string).toString();
    } catch (err) {
      string = "Error";
    }
    input.value = string;
    return;
  }

  // Backspace = DEL
  if (key === "Backspace") {
    string = string.substring(0, string.length - 1);
    input.value = string;
    return;
  }

  // Escape = AC
  if (key === "Escape") {
    string = "";
    input.value = "";
    return;
  }
});
