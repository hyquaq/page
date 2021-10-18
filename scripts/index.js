document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector("header .menu").classList.toggle("active");
  document.querySelector("header .close-menu").classList.toggle("active");
  console.log(document.querySelector("header .close-menu"));
  // console.log(window.innerWidth <= 920);
  // if (window.innerWidth <= 920) {
  //     document.querySelector('.map iframe').classList.toggle('resize');
  // }
  console.log(window.innerWidth <= 920);
  if (window.innerWidth <= 920) {
    document.querySelector(".map iframe").classList.toggle("resize");
  }
  // khoa
  document.querySelector("#chaomung").classList.toggle("farindex");
});

document.querySelectorAll(".menu a").forEach((element) => {
  element.addEventListener("click", (e) => {
    document.querySelector("header .menu").classList.toggle("active");
    document.querySelector("header .close-menu").classList.remove("active");
  });
});

window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  if (scroll > 200) {
    document.querySelector("header").classList.remove("transparent");
    document.querySelector("header").classList.add("animationHeader");
  } else {
    document.querySelector("header").classList.add("transparent");
    document.querySelector("header").classList.remove("animationHeader");
  }
});

window.addEventListener("click", (e) => {
  console.log([...e.target.classList].includes("close-menu"));
  if ([...e.target.classList].includes("close-menu")) {
    document.querySelector("header .menu").classList.remove("active");
    document.querySelector("header .close-menu").classList.remove("active");
    document.querySelector("#chaomung").classList.toggle("farindex");
  }
});
