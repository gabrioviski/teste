const showBtn = document.querySelector('#show')
const menu = document.querySelector('.sidebar')
showBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})