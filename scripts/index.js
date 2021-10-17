

document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("header .menu").classList.toggle('active');
    console.log(window.innerWidth <= 920);
    if (window.innerWidth <= 920) {
        document.querySelector('.map iframe').classList.toggle('resize');
    }
})


document.querySelectorAll('.menu a').forEach(
    (element) => {
        element.addEventListener('click', (e) => {
            document.querySelector("header .menu").classList.toggle('active');
        })
    }
)