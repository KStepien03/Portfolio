let position = document.documentElement;
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX + "px");
  position.style.setProperty("--y", e.clientY + "px");
});

////////////////////////////////NAVIGATION

const linkAbout = document.getElementById("section1");
const sectionAbout = document.querySelector(".about");

const linkEducation = document.getElementById("section2");
const sectionEducation = document.querySelector(".education");

const linkExperience = document.getElementById("section3");
const sectionExperience = document.querySelector(".experience");

const linkProjects = document.getElementById("section4");
const sectionProjects = document.querySelector(".projects");

const margin = 160;

function activeLink() {
  if (
    window.pageYOffset >= 0 &&
    window.pageYOffset + margin < sectionEducation.offsetTop
  ) {
    linkAbout.classList.add("active-link");
    linkEducation.classList.remove("active-link");
    linkExperience.classList.remove("active-link");
    linkProjects.classList.remove("active-link");
  } else if (
    window.pageYOffset + margin >= sectionEducation.offsetTop &&
    window.pageYOffset + margin < sectionExperience.offsetTop
  ) {
    linkAbout.classList.remove("active-link");
    linkEducation.classList.add("active-link");
    linkExperience.classList.remove("active-link");
    linkProjects.classList.remove("active-link");
  } else if (
    window.pageYOffset + margin >= sectionExperience.offsetTop &&
    window.pageYOffset + margin < sectionProjects.offsetTop
  ) {
    linkAbout.classList.remove("active-link");
    linkEducation.classList.remove("active-link");
    linkExperience.classList.add("active-link");
    linkProjects.classList.remove("active-link");
  } else if (window.pageYOffset + margin >= sectionProjects.offsetTop) {
    linkAbout.classList.remove("active-link");
    linkEducation.classList.remove("active-link");
    linkExperience.classList.remove("active-link");
    linkProjects.classList.add("active-link");
  }
}

$(window).on("scroll", activeLink);

///////////////////////////

function politechnika() {
  window.open("https://www.polsl.pl/", "_blank");
}

function zsti() {
  window.open("https://www.zsti.gliwice.pl/", "_blank");
}

function zlomnica() {
  window.open("https://slaskiecentrumkomputerowe.pl/", "_blank");
}

function wodip() {
  window.open(
    "http://bip.rzpwe.opolskie.pl/7/1/strona-glowna-bip.html",
    "_blank"
  );
}

function built() {
  window.open("https://kstepien03.github.io/TheBuilt/", "_blank");
}

function cinema() {
  window.open("https://kstepien03.github.io/Cinema/", "_blank");
}

function universytet() {
  window.open("https://kstepien03.github.io/Universytet/", "_blank");
}

function time() {
  window.open("https://kstepien03.github.io/Time/", "_blank");
}
