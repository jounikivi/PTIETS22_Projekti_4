const nappi = document.getElementsByClassName('btn1')[0]
const navmenu = document.getElementsByClassName('menu')[0]
nappi.addEventListener('click', () =>{
  navmenu.classList.toggle('active')
})