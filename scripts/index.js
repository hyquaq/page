

document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("header .menu").classList.toggle('active')
})


document.querySelectorAll('.menu a').forEach(
    (element) => {
        element.addEventListener('click', (e) => {
            document.querySelector("header .menu").classList.toggle('active');
        })
    }
)