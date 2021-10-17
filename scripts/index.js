
// menu hamburger tren mobile
document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("header .menu").classList.toggle('active');
    document.querySelector("header .close-menu").classList.toggle('active');
    console.log(document.querySelector("header .close-menu"))
    // console.log(window.innerWidth <= 920);
    // if (window.innerWidth <= 920) {
    //     document.querySelector('.map iframe').classList.toggle('resize');
    // }
})


// close menu khi minh da click
document.querySelectorAll('.menu a').forEach(
    (element) => {
        element.addEventListener('click', (e) => {
            document.querySelector("header .menu").classList.toggle('active');
            document.querySelector("header .close-menu").classList.remove('active');
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

window.addEventListener("click", e => {
    console.log([...e.target.classList].includes('close-menu'))
    if ([...e.target.classList].includes('close-menu')) {
        document.querySelector("header .menu").classList.remove('active');
        document.querySelector("header .close-menu").classList.remove('active');

    }
})