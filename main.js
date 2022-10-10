let currentNbContainer = document.querySelector("#curr_number");
let calculatedNb = document.querySelector("#calculated_number");
let numbersBtn = document.querySelectorAll(".input-btn");
let calcBtn = document.querySelectorAll(".calc-btn");
let resultBtn = document.querySelector("#result-btn");
let negativeBtn = document.querySelector("#negative-btn");
let sign = "";

document.addEventListener("keyup", (e) => {
  if (e.key == 0) {
    numbersBtn[numbersBtn.length - 1].click();
  } else if (Number.isNaN(e.key / 2) === false) {
    numbersBtn[e.key - 1].click();
  } else {
    switch (e.key) {
      case "+":
        console.log("+");
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
  }
});

negativeBtn.addEventListener("click", () => {
  currentNbContainer.innerHTML *= -1;
});

resultBtn.addEventListener("click", () => {
  let a = calculatedNb.innerHTML;
  let b = currentNbContainer.innerHTML;
  res = eval(`${a} ${b}`);
  if (res === Infinity || res === "NaN") {
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
  if (container.textContent[0] === "0") {
    container.textContent = b;
  }
}

Number.parseInt();

function delete_nb() {
  let a = currentNbContainer.innerHTML;
  currentNbContainer.innerHTML = Math.floor(a / 10);
}

function delete_all() {
  currentNbContainer.innerHTML = "0";
  calculatedNb.innerHTML = "";
}
