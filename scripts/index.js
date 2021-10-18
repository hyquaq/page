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
  } else {
    document.querySelector("header").classList.add("transparent");
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

document.addEventListener(
  "mousedown",
  function (e) {
    var rong = e.screenY;
    if (rong < 300) {
      box.mesh.rotation.x = 0.5 + Math.PI;
      box2.mesh.rotation.y = -Math.PI;
    }
  },
  false
);
