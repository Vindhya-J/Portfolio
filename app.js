const toggleBut = document.getElementsByClassName("togglebut")[0]
const navlinks = document.getElementsByClassName("navlinks")[0]


toggleBut.addEventListener('click',() =>{
    navlinks.classList.toggle('active')
})