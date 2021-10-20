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

  // remove lop ao close menu
  // [...document.querySelector("header .close-menu").classList].indexOf("active") ? document.querySelector("header .close-menu").click() : console.log("1");
  if (document.querySelector("header .close-menu.active") != null) {
    document.querySelector("header .close-menu.active").classList.remove("active")
    document.querySelector(".hamburger").classList.toggle('active');
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
    var rong = e.screenY,
        dai = e.screenX;
    if (rong < 250 && dai<950 && dai >610) {
      box.mesh.rotation.x = 0.5 + Math.PI;
      box2.mesh.rotation.y = -Math.PI;
    }
  },
  false
);


//.................................slide
var slide = document.getElementById('js-slide');
var thoigian = 1;
function auto(){
setTimeout(() => {
  slide.style.marginLeft = '0%'
  khoa =0
  kt.style.backgroundColor = '#3f5777'
    kt2.style.backgroundColor = null
    kt3.style.backgroundColor = null
}, 0000);
setTimeout(() => {
  slide.style.marginLeft = '-33.3%'
  khoa =-33.3
  kt2.style.backgroundColor = '#3f5777'
    kt.style.backgroundColor = null
    kt3.style.backgroundColor = null
}, 5500);
setTimeout(() => {
  slide.style.marginLeft = '-66.6%'
  khoa =-66.6
  kt3.style.backgroundColor = '#3f5777'
    kt.style.backgroundColor = null
    kt2.style.backgroundColor = null
}, 11000);
}

auto();
var runSlide = setInterval(() => {
    auto();
}, 16500);


var kt = document.getElementById('b1');
var kt2 = document.getElementById('b2');
var kt3 = document.getElementById('b3');


var khoa = 0
function nutSlidePhai(){
    khoa -=33.3;
    slide.style.marginLeft = khoa +'%' 
    if (khoa < -66.6){
        khoa= -66.6
        slide.style.marginLeft = khoa + '%' 
    }
    kiem();
}
function nutSlideTrai(){
    khoa+=33.3
    slide.style.marginLeft = khoa + '%' 
    if (khoa > 0){
        khoa=0
        slide.style.marginLeft = khoa + '%' 
    }
    kiem();
}

function kiem(){
    if (khoa == 0){
    kt.style.backgroundColor = '#3f5777'
    kt2.style.backgroundColor = null
    kt3.style.backgroundColor = null
} else if (khoa == -33.3){
    kt2.style.backgroundColor = '#3f5777'
    kt.style.backgroundColor = null
    kt3.style.backgroundColor = null
}  else if (khoa == -66.6){
  kt3.style.backgroundColor = '#3f5777'
  kt.style.backgroundColor = null
  kt2.style.backgroundColor = null
}
}

//////////////// ..........................................Trang chu
var BGC = document.querySelector("#backgroundClick"),
  homeCard = document.querySelector("#style-1");
var trys = 0;

document.querySelector("#chaomung").addEventListener(
  "mouseup",
  function () {
    homeCard.classList.remove("home--card__false");
    setTimeout(function () { trys = 1; clearInterval(runSlide);}, 100)
  },
  false
);
window.onclick = function (e) {
  if (e.target != BGC && e.target != homeCard && trys == 1) {
    homeCard.style.animation = "disappear .7s ease";
    trys = 0;
    setTimeout(function () {
      homeCard.classList.add("home--card__false");
      homeCard.style.animation = "";
      auto();
      runSlide = setInterval(() => {
        auto();
    }, 11000);
    }, 690)
  }
};