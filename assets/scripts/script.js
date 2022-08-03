import Devision from "./modules/devision.module.js";
let errorWindow = document.querySelector(".error_window");
let fraseOne = document.querySelector(".beforeText");
let fraseTwo = document.querySelector(".afterText");

let data = {
  frase: null,
  devisionWord: null,
  devideWhere: "danach",
};

document.querySelector(".form").addEventListener("input", (event) => {
  errorWindow.innerHTML = "";
  data[event.target.name] = event.target.value;
  console.log(data);
});

document.querySelector(".button").addEventListener("click", (event) => {
  event.preventDefault();
  let devisionFrase = new Devision(data);
  const resultObj = devisionFrase.devide();
  if (resultObj.message === "error") {
    fraseOne.innerHTML = "";
    fraseTwo.innerHTML = "";
    errorWindow.style.color = "red";
    errorWindow.innerHTML = resultObj.text;
  } else {
    fraseOne.innerHTML = resultObj.frase1;
    fraseTwo.innerHTML = resultObj.frase2;
  }
});
