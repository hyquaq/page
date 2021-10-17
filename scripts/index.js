
// menu hamburger tren mobile
document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("header .menu").classList.toggle('active');
    console.log(window.innerWidth <= 920);
    if (window.innerWidth <= 920) {
        document.querySelector('.map iframe').classList.toggle('resize');
    }
})


// close menu khi minh da click
document.querySelectorAll('.menu a').forEach(
    (element) => {
        element.addEventListener('click', (e) => {
            document.querySelector("header .menu").classList.toggle('active');
        })
    }
)


// change background header when scroll
window.addEventListener('scroll', (e) => {

    // console.log(document.documentElement.clientHeight);
    console.log(window.scrollY);
    if (window.scrollY > 10) {
        document.querySelector("header").classList.remove("transparent");
    } else {
        document.querySelector("header").classList.add("transparent");

    }
})

