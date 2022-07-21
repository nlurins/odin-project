import _ from "lodash";
import myName from "./myName";
function components() {
  const element = document.createElement("div");
  //lodash imported
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

function component() {
  const element = document.createElement("div");

  element.textContent = myName("Tom");
  element.id = "slide";
  return element;
}

document.body.appendChild(component());
let slideArr = [];

class slider {
  constructor(imgName) {
    this.imgName = imgName;
  }
  addToCarousel() {
    slideArr.push(this);
  }
}

async function rotate() {
  let currentSlide = document.querySelector("#slide");
  slideArr.forEach((slide) => {
    currentSlide.textContent = "";

    setTimeout(() => {
      currentSlide.textContent = slide.imgName;
    }, 5000);
  });
}

const slide1 = new slider("slider1");
const slide2 = new slider("slide2");
const slide3 = new slider("slide3");
slide1.addToCarousel();
slide2.addToCarousel();
slide3.addToCarousel();
setInterval(rotate(), 5000);
