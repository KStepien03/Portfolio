let position = document.documentElement;
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX + "px");
  position.style.setProperty("--y", e.clientY + "px");
});

////////////////////////////////NAVIGATION

const linkAbout = document.getElementById("section1");
const linkAboutv2 = document.getElementById("section1v2");
const sectionAbout = document.querySelector(".about");

const linkEducation = document.getElementById("section2");
const linkEducationv2 = document.getElementById("section2v2");
const sectionEducation = document.querySelector(".education");

const linkExperience = document.getElementById("section3");
const linkExperiencev2 = document.getElementById("section3v2");
const sectionExperience = document.querySelector(".experience");

const linkProjects = document.getElementById("section4");
const linkProjectsv2 = document.getElementById("section4v2");
const sectionProjects = document.querySelector(".projects");

const margin = 160;
const result = document.getElementById("section-info");

function activeLink() {
  if (
    window.pageYOffset >= 0 &&
    window.pageYOffset + margin < sectionEducation.offsetTop
  ) {
    linkAboutv2.classList.add("active-link");
    linkEducationv2.classList.remove("active-link");
    linkExperiencev2.classList.remove("active-link");
    linkProjectsv2.classList.remove("active-link");

    linkAbout.classList.add("active-link");
    linkEducation.classList.remove("active-link");
    linkExperience.classList.remove("active-link");
    linkProjects.classList.remove("active-link");

    result.innerHTML = `about me`;
  } else if (
    window.pageYOffset + margin >= sectionEducation.offsetTop &&
    window.pageYOffset + margin < sectionExperience.offsetTop
  ) {
    linkAbout.classList.remove("active-link");
    linkEducation.classList.add("active-link");
    linkExperience.classList.remove("active-link");
    linkProjects.classList.remove("active-link");

    linkAboutv2.classList.remove("active-link");
    linkEducationv2.classList.add("active-link");
    linkExperiencev2.classList.remove("active-link");
    linkProjectsv2.classList.remove("active-link");

    result.innerHTML = `education`;
  } else if (
    window.pageYOffset + margin >= sectionExperience.offsetTop &&
    window.pageYOffset + margin < sectionProjects.offsetTop
  ) {
    linkAbout.classList.remove("active-link");
    linkEducation.classList.remove("active-link");
    linkExperience.classList.add("active-link");
    linkProjects.classList.remove("active-link");

    linkAboutv2.classList.remove("active-link");
    linkEducationv2.classList.remove("active-link");
    linkExperiencev2.classList.add("active-link");
    linkProjectsv2.classList.remove("active-link");

    result.innerHTML = `experience`;
  } else if (window.pageYOffset + margin >= sectionProjects.offsetTop) {
    linkAbout.classList.remove("active-link");
    linkEducation.classList.remove("active-link");
    linkExperience.classList.remove("active-link");
    linkProjects.classList.add("active-link");

    linkAboutv2.classList.remove("active-link");
    linkEducationv2.classList.remove("active-link");
    linkExperiencev2.classList.remove("active-link");
    linkProjectsv2.classList.add("active-link");

    result.innerHTML = `projects`;
  }
}

$(window).on("scroll", activeLink);

const headerMenu = document.getElementById("header-nav");
const headerToggle = document.getElementById("header-toggle");
const headerClose = document.getElementById("header-close");

if (headerToggle) {
  headerToggle.addEventListener("click", () => {
    headerMenu.classList.add("show-menu");
  });
}

if (headerClose) {
  headerClose.addEventListener("click", () => {
    headerMenu.classList.remove("show-menu");
  });
}

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
