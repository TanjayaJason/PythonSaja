function hideSplashScreen() {
  const splashScreen = document.getElementById("splashScreen");
  const mainContent = document.getElementById("mainContent");
  const navbar = document.querySelector(".navbar");
  const body = document.body;

  window.scrollTo(0, 0); // Setiap splashscreen, scroll ke paling atas

  splashScreen.style.transform = "scale(0)";

  setTimeout(() => {
    splashScreen.style.display = "none";
    mainContent.style.display = "block"; // hide splash screen trus show main content ubah display type nya jadi block
    navbar.classList.remove("hidden"); // Show navbar
    body.classList.remove("no-scroll"); // Enable Scrolling

    mainContent.style.transform = "scale(1)";
  }, 500); // delaynya samain sama yg di css
}

window.addEventListener("load", () => {
  setTimeout(hideSplashScreen, 3000);
  const body = document.body;
  body.classList.add("no-scroll"); // Disable scroll ketika splash
});

// SECTION HOME, function untuk card list anggota dan image socmed
document.addEventListener("DOMContentLoaded", function () {
  const imgTags = document.querySelectorAll(".list-anggota .anggota img");
  const imgSM = document.querySelectorAll(".list-anggota .anggota .SM img");
  let index = 0;

  function showImage() {
    if (index < imgTags.length) {
      imgTags[index].classList.add("show");
      index++;
      setTimeout(showImage, 200); // waktu buat show img nya
    }
  }

  function showSMImage() {
    let smIndex = 0;
    const smBatchSize = 3; // Number of .SM images to show at a time

    function showNextSMGroup() {
      for (let i = smIndex; i < smIndex + smBatchSize; i++) {
        if (i < imgSM.length) {
          imgSM[i].classList.add("show");
        }
      }

      smIndex += smBatchSize;

      if (smIndex < imgSM.length) {
        setTimeout(showNextSMGroup, 800); // setTimeout(showImage, dikali 4)
      }
    }

    showNextSMGroup();
  }

  const mainContent = document.getElementById("mainContent");
  mainContent.style.display = "block";
  setTimeout(showImage, 3600); // waktu tampil setelah main contentnya tampil
  setTimeout(showSMImage, 3800); // Sesuaikan dengan delay pada showImage

  const socialMediaIcons = document.querySelectorAll(".SM");
  socialMediaIcons.forEach((icon) => {
    icon.classList.add("show");
  });
});

function showAlert(message) {
  alert(message);
}

let SMLinks = document.getElementsByClassName("SMLink");
for (let i = 0; i < SMLinks.length; i++) {
  SMLinks[i].onclick = function(event) {
    event.preventDefault(); // Agar tidak scroll ke atas tiap alert
    showAlert("Yo ndak tau!");
  }
}


///////////////////////////////////////////////////////////
const stickySections = [...document.querySelectorAll(".horizontal")];
let images = ["assets/image/pngegg (3).png", "assets/image/pngegg (4).png", "assets/image/pngegg (5).png", "assets/image/pngegg (6).png", "assets/image/pnegg (8).png", "assets/image/pngegg (7).png"];

let descriptions = ["Arya Wira Kristanto", "Jessen Chayadi", "Tanjaya Jason", "Albert", "Jonathan Setiawan", "Nicholas Martin"];

let additionalText = [
  "Ini Arya Wira Kristanto, yang sangat antusias dalam belajar. Dia suka menjelajahi matkul baru dan selalu bersemangat untuk belajar.",
  "Jessen Chayadi adalah seorang pembelajar yang bersemangat dan senang mendalami berbagai topik. Rasa ingin tahunya tidak terbatas.",
  "Tanjaya Jason selalu penasaran dengan hal-hal baru dan memiliki dahaga akan pengetahuan yang tak bisa dipuaskan.",
  "Meet Albert, penjelajah ilmu pengetahuan. Dia selalu mencari informasi baru dan benar-benar seorang Computer Scientist di dalam hatinya.",
  "............................",
  "What did I do?",
];

images.forEach((img, index) => {
  stickySections.forEach((section) => {
    let container = document.createElement("div");
    container.classList.add("image-container");

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("image-inner-container");

    let image = document.createElement("img");
    image.src = img;
    image.alt = `Image ${index + 1}`;

    let description = document.createElement("p");
    description.textContent = `${index + 1}. ${descriptions[index]}`;

    let textBesideImage = document.createElement("p");
    textBesideImage.textContent = additionalText[index];

    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
    container.appendChild(description);
    container.appendChild(textBesideImage);

    section.querySelector(".scrolling").appendChild(container);
  });
});

const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((container, index) => {
  container.style.marginRight = "270px";
  container.style.marginLeft = "250px"; // Add space between images
});
//////
function checkVisibility() {
  const windowHeight = window.innerHeight;

  imageContainers.forEach((container) => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < windowHeight - 350) {
      container.classList.add("show");
    } else {
      container.classList.remove("show");
    }
  });
}

// Initial check
checkVisibility();

window.addEventListener("scroll", checkVisibility);
//////
imageContainers.forEach((container) => {
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.alignItems = "center";

  let imageInnerContainer = container.querySelector(".image-inner-container");
  imageInnerContainer.style.marginRight = "30px";

  let descriptions = container.querySelector("p:nth-child(2)");
  descriptions.style.textAlign = "center";
  descriptions.style.fontSize = "30px";

  let description = container.querySelector("p:nth-child(3)");
  description.style.textAlign = "center";
  description.style.fontSize = "28px";
});

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector(".scrolling");
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
  scrollSection.style.transform = `translate3d(-${percentage}vw, 0, 0)`;
}

window.addEventListener("scroll", (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i]);
  }
});

// https://youtu.be/yXnK8ND76z8?si=nkok0BirOilV9Rm9

//SlideShow
let currentImage = 0;
let evolution = ["assets/image/snake png wing.png", "assets/image/snake png wing (1).png"];

function changeImage() {
  currentImage = (currentImage + 1) % evolution.length;
  let imageElement = document.querySelector(".slideshow-container img");
  imageElement.src = evolution[currentImage];
}
