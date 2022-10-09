let currentNbContainer = document.querySelector("#curr_number");
let calculatedNb = document.querySelector("#calculated_number");
let numbersBtn = document.querySelectorAll(".input-btn");
let calcBtn = document.querySelectorAll(".calc-btn");
let resultBtn = document.querySelector("#result-btn");
let negativeBtn = document.querySelector("#negative-btn");
let sign = "";

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  switch (e.key) {
    case "1":
      numbersBtn[0].click();
      break;
    case "2":
      numbersBtn[1].click();
      break;
    case "3":
      numbersBtn[2].click();
      break;
    case "4":
      numbersBtn[3].click();
      break;
    case "5":
      numbersBtn[4].click();
      break;
    case "6":
      numbersBtn[5].click();
      break;
    case "7":
      numbersBtn[6].click();
      break;
    case "8":
      numbersBtn[7].click();
      break;
    case "9":
      numbersBtn[8].click();
      break;
    case "0":
      numbersBtn[9].click();
      break;
    case "+":
      calcBtn[0].click();
      break;
    case "-":
      calcBtn[1].click();
      break;
    case "*":
      calcBtn[2].click();
      break;
    case "/":
      calcBtn[3].click();
      break;
    case "Backspace":
      delete_nb();
      break;
    case "c":
      delete_all();
      break;
    case "Enter":
      resultBtn.click();
      break;
  }
});

negativeBtn.addEventListener("click", () => {
  currentNbContainer.innerHTML *= -1;
});

resultBtn.addEventListener("click", () => {
  let a = calculatedNb.innerHTML;
  let b = currentNbContainer.innerHTML;
  res = eval(`${a} ${b}`);
  if (res === Infinity) {
    res = "Error !";
    console.log(res);
    currentNbContainer.style.color = "red";
    setTimeout(() => {
      currentNbContainer.innerHTML = "0";
      currentNbContainer.style.color = "black";
    }, 2000);
  }
  currentNbContainer.innerHTML = res;
  calculatedNb.innerHTML = "";
});

calcBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    delete_zero(calculatedNb);
    calculatedNb.innerHTML += currentNbContainer.innerHTML + ele.innerHTML;
    sign = ele.innerHTML;
    currentNbContainer.innerHTML = "0";
  });
});

// function is_notIncludingSym() {
//   if (calculatedNb.innerHTML.includes("+")) {
//     return false;
//   } else if (calculatedNb.innerHTML.includes("-")) {
//     return false;
//   } else if (calculatedNb.innerHTML.includes("*")) {
//     return false;
//   } else if (calculatedNb.innerHTML.includes("/")) {
//     return false;
//   } else {
//     return true;
//   }
// }

numbersBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    let nb = ele.innerHTML.trim();
    // if (currentNbContainer.textContent.length < 8) {
    currentNbContainer.innerHTML += nb;
    // }
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
  calculatedNb.innerHTML = "";
}
