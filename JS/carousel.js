const img = document.querySelector('.container')
const imgs = document.querySelectorAll('.container img')
const navButtons = document.querySelectorAll('.nav-button > input[name="nav"]')
var index = 0

setInterval(change, 5000)
function change() {
    var width = img.clientWidth
    index++
    
    if (index < imgs.length) {
        img.style.transform =  `translateX(-${width * index}px)`
    } else {
        img.style.transform = `translateX(0px)`
        index = 0
    }
    navButtons[index].checked = true
}

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', event => {
        var target = event.target
        index = target.dataset.index
        var width = img.clientWidth
        img.style.transform =  `translateX(-${width * index}px)`
    })
}