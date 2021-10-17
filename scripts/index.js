// function removeThis(obj) {
//     console.log(obj.parentElement);
//     console.log(typeof obj.parentElement.noteName);
//     // document.removeChild(obj.parentElement);
//     obj.parentElement.remove();
// }

document.querySelector(".hamburger").addEventListener('click', () => {

    document.querySelector("header .menu").classList.toggle('active')
})