// console.log("hello");

"use strict";

const img_src1 =
  "https://images.unsplash.com/photo-1425321488784-32cdca45e94e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200";
const img_src2 =
  "https://images.unsplash.com/uploads/141310026617203b5980d/c86b8baa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=150&fit=crop&ixid=eyJhcHBfaWQiOjF9";
const img_src3 =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200";
const img_src4 =
  "https://images.unsplash.com/photo-1426901403100-9c1c6b77a54a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200";
const img_src5 =
  "https://images.unsplash.com/photo-1461711513774-c78b437a740b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=150&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=200";

const imgSrc = [img_src1, img_src2, img_src3, img_src4, img_src5];

let selectedImages = [];

function randomizeImages() {
  const imgSrcSize = imgSrc.length;
  const randomIndex = Math.floor(Math.random() * imgSrcSize);

  // const [...newImgsrc] = imgSrc;
  const newImgsrc = [...imgSrc];
  newImgsrc.push(imgSrc[randomIndex]);

  // console.log("shuffle Array " , newImgsrc, shuffle(newImgsrc));
  const shuffleArray = shuffle(newImgsrc);

  return shuffleArray;
}

function shuffle(arr) {
  const shuffleArray = [...arr];
  const N = shuffleArray.length;
  for (let i = 0; i < N; i++) {
    const randomIndex = i + Math.floor(Math.random() * (N - i));
    let temp = shuffleArray[randomIndex];
    shuffleArray[randomIndex] = shuffleArray[i];
    shuffleArray[i] = temp;
  }
  return shuffleArray;
}

function show() {
  const imgArray = randomizeImages();
  const images = document.getElementById("images");
  let id = 0;
  imgArray.forEach((image) => {
    const input = document.createElement("img");
    input.setAttribute("src", image);
    input.setAttribute("id", id);
    id = id + 1;
    input.setAttribute("onclick", "selectImage(this.id)");
    images.appendChild(input);
  });
}

function selectImage(id) {
  if (selectedImages.indexOf(id) === -1) selectedImages.push(id);
  console.log(selectedImages);
  document.getElementById("reset").style.display = "block";
  if (selectedImages.length === 2) {
    document.getElementById("btn").style.display = "block";
    document.getElementById("h3").style.display = "none";
  } else if (selectedImages.length === 3) {
    initialize();
    document.getElementById("btn").style.display = "none";
    document.getElementById("h3").style.display = "block";
  } else {
    document.getElementById("btn").style.display = "none";
  }
}

function verify() {
  const images = document.getElementById("images");
  const para = document.createElement("p");
  para.setAttribute("id", "para");
  const first = document.getElementById(selectedImages[0]);
  const second = document.getElementById(selectedImages[1]);
  if (first.src === second.src)
    para.innerText = "You are a human. Congratulations!";
  else
    para.innerText =
      "We can't verify you as a human. You selected the non-identical tiles.";
  images.appendChild(para);
  document.getElementById("btn").style.display = "none";
  document.getElementById("h3").style.display = "none";
}

function initialize() {
  document.getElementById("reset").style.display = "none";
  document.getElementById("h3").style.display = "block";

  document.getElementById("images").innerText = "";
  show();
  selectedImages = [];
}

initialize();
