let sliderImages = document.querySelectorAll(".myImage"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  modal = document.getElementById("simpleModal"),
  closeBtn = document.getElementsByClassName("closeBtn")[0],
  modalImg = document.getElementById("img01"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

function startSlide() {
  reset();

  modalImg.src = sliderImages[0].src;
  sliderImages[0].style.display = "block";
  sliderImages[0].addEventListener("click", openModal);
}

function slideLeft() {
  reset();
  modalImg.src = sliderImages[current - 1].src;
  sliderImages[current - 1].style.display = "block";
  sliderImages[current - 1].addEventListener("click", openModal);
  current--;
}

function slideRight() {
  reset();
  modalImg.src = sliderImages[current + 1].src;
  sliderImages[current + 1].style.display = "block";
  sliderImages[current + 1].addEventListener("click", openModal);
  current++;
}

arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}

function openModal() {
  modalcurrent = current;
  modal.style.display = "block";
  modalImg.src = sliderImages[modalcurrent].src;
  window.addEventListener("click", clickOutside);
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
