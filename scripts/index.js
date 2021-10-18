

document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("header .menu").classList.toggle('active');
    document.querySelector("header .close-menu").classList.toggle('active');
    console.log(document.querySelector("header .close-menu"))
    // console.log(window.innerWidth <= 920);
    // if (window.innerWidth <= 920) {
    //     document.querySelector('.map iframe').classList.toggle('resize');
    // }
    console.log(window.innerWidth <= 920);
    if (window.innerWidth <= 920) {
        document.querySelector('.map iframe').classList.toggle('resize');
    }
    // khoa
    document.querySelector("#chaomung").classList.toggle('farindex');
})


document.querySelectorAll('.menu a').forEach(
    (element) => {
        element.addEventListener('click', (e) => {
            document.querySelector("header .menu").classList.toggle('active');
            document.querySelector("header .close-menu").classList.remove('active');
        })
    }
)

window.addEventListener("scroll", e => {

})

window.addEventListener("click", e => {
    console.log([...e.target.classList].includes('close-menu'))
    if ([...e.target.classList].includes('close-menu')) {
        document.querySelector("header .menu").classList.remove('active');
        document.querySelector("header .close-menu").classList.remove('active');
        document.querySelector("#chaomung").classList.toggle('farindex');
    }
})