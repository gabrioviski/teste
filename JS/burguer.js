const burguer = document.querySelector('.burguer')
const burguerMenu = document.querySelector('.burguer-menu')

burguer.addEventListener('click', () => {
    burguerMenu.classList.toggle('active')
    burguer.classList.toggle('active')
})