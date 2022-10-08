let currentNbContainer = document.querySelector("#curr_number");
let calculatedNb = document.querySelector("#calculated_number");
let numbersBtn = document.querySelectorAll(".input-btn");
let calcBtn = document.querySelectorAll(".calc-btn");
let resultBtn = document.querySelector("#result-btn");
let negativeBtn = document.querySelector("#negative-btn");
let sign = "";

negativeBtn.addEventListener("click", () => {
  currentNbContainer.innerHTML *= -1;
});

resultBtn.addEventListener("click", () => {
  let a = calculatedNb.innerHTML.slice(0, calculatedNb.innerHTML.length - 1);
  let b = currentNbContainer.innerHTML;
  a = Number(a);
  b = Number(b);
  // console.log(a, sign, b);
  switch (sign.trim()) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  console.log(res);
  currentNbContainer.innerHTML = res;
  calculatedNb.innerHTML = "";
});

calcBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (is_notIncludingSym()) {
      delete_zero(calculatedNb);
      calculatedNb.innerHTML += currentNbContainer.innerHTML + ele.innerHTML;
      sign = ele.innerHTML;
      currentNbContainer.innerHTML = "0";
    }
  });
});

function is_notIncludingSym() {
  if (calculatedNb.innerHTML.includes("+")) {
    return false;
  } else if (calculatedNb.innerHTML.includes("-")) {
    return false;
  } else if (calculatedNb.innerHTML.includes("*")) {
    return false;
  } else if (calculatedNb.innerHTML.includes("/")) {
    return false;
  } else {
    return true;
  }
}

numbersBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    let nb = ele.innerHTML.trim();
    if (currentNbContainer.textContent.length < 8) {
      currentNbContainer.innerHTML += nb;
    }
    if (currentNbContainer.textContent[0] == "0") {
      delete_zero(currentNbContainer);
    }
  });
});

function delete_zero(container) {
  let b = container.textContent.slice(1, container.textContent.length);
  container.textContent = b;
}

function delete_nb() {
  let a = currentNbContainer.innerHTML;
  currentNbContainer.innerHTML = Math.floor(a / 10);
}

function delete_all() {
  currentNbContainer.innerHTML = "0";
  calculatedNb.innerHTML = "0";
}
