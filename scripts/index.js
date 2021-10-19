document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector("header .menu").classList.toggle("active");
  document.querySelector("header .close-menu").classList.toggle("active");
  console.log(document.querySelector("header .close-menu"));

  // chuyen doi hamburger to x
  document.querySelector(".hamburger").classList.toggle('active');


  // console.log(window.innerWidth <= 920);
  // if (window.innerWidth <= 920) {
  //     document.querySelector('.map iframe').classList.toggle('resize');
  // }

  // resize map
  // console.log(window.innerWidth <= 920);
  // if (window.innerWidth <= 920) {
  //   document.querySelector(".map iframe").classList.toggle("resize");
  // }

  // khoa
  document.querySelector("#chaomung").classList.toggle("farindex");
});

// click logo 
document.querySelector("header .logo").addEventListener("click", (e) => {
  document.querySelectorAll(".menu a").forEach(e => e.classList.remove('active'));

  // element add class active 
  document.querySelectorAll(".menu a")[0].classList.add('active');
})

document.querySelectorAll(".menu a").forEach((element) => {
  element.addEventListener("click", (e) => {

    // all element remove class active
    document.querySelectorAll(".menu a").forEach(e => e.classList.remove('active'));

    // element add class active 
    element.classList.add('active');


    document.querySelector("header .menu").classList.toggle("active");

    // close menu 
    document.querySelector("header .close-menu").classList.remove("active");

    // chuyen doi hamburger to x
    document.querySelector(".hamburger").classList.toggle('active');

  });
});

window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY;
  if (scroll > 20) {
    document.querySelector("header").classList.remove("transparent");
  } else {
    document.querySelector("header").classList.add("transparent");
  }


  const navItems = document.querySelectorAll(".menu a");
  const secItems = document.querySelectorAll(".section");
  // console.log(navItems);
  // console.log(secItems);

  secItems.forEach((section, indexSection) => {
    const top = section.offsetTop - $("header").height();
    const html = this.document.documentElement;

    navItems.forEach(navItem => {
      const hrefNav = navItem.href.match(/#[a-zA-Z-]+/)[0];
      const idSection = '#' + section.id;
      const height = section.offsetHeight;


      console.log(indexSection)
      if ((html.scrollTop >= top && top + height >= html.scrollTop) || indexSection == 4) {
        hrefNav === idSection ? navItem.classList.add('active') : navItem.classList.remove('active');
        ;
      } else {
        hrefNav === idSection &&
          navItem.parentElement.classList.remove('active');
      }
    })
  })

});

window.addEventListener("click", (e) => {
  console.log([...e.target.classList].includes("close-menu"));
  if ([...e.target.classList].includes("close-menu")) {
    document.querySelector("header .menu").classList.remove("active");
    document.querySelector("header .close-menu").classList.remove("active");

    // chuyen doi hamburger to x
    document.querySelector(".hamburger").classList.toggle('active');

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
//////////////// Trang chu
var BGC = document.querySelector("#backgroundClick"),
  homeCard = document.querySelector("#style-1");
  var trys =0;

document.querySelector("#chaomung").addEventListener(
  "mouseup",
  function () {
      homeCard.classList.remove("home--card__false");
      setTimeout(function () {trys=1;},100)
  },
  false
);
window.onclick = function (e) {
  if (e.target != BGC && e.target != homeCard && trys ==1) {
    homeCard.style.animation = "disappear .7s ease";
      trys =0;
    setTimeout(function (){homeCard.classList.add("home--card__false");
    homeCard.style.animation = "";},690)
  }
};
