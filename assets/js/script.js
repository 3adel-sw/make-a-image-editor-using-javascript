let saturate = document.getElementById("saturate");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");
let invert = document.getElementById("invert");

let upload = document.getElementById("upload");
let download = document.getElementById("download");
let image = document.getElementById("img");

let reset = document.querySelector("span");
let imgBox = document.querySelector(".img-box");

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

function resetValue() {
  img.style.filter = "none";
  saturate.value = 100;
  contrast.value = 100;
  brightness.value = 100;
  sepia.value = 0;
  grayscale.value = 0;
  blur.value = 0;
  hueRotate.value = 0;
  invert.value = 0;
}

window.onload = function () {
  resetValue();
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
};
upload.onchange = function () {
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(this.files[0]);
  file.onload = function (e) {
    image.src = e.target.result;
  };
};

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  // img.style.display = "none";
};

let filters = document.querySelectorAll("ul li input");

filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    img.style.filter = `
    
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    invert(${invert.value}%)
    
    
    `;
  });
});

download.onclick = function () {
  download.href = image.src;
};
