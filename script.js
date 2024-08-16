const toggleBtn = document.querySelector(".nav__list--btn")
const navList = document.querySelector(".nav__list--all")
toggleBtn.addEventListener("click", ()=>{
  navList.classList.toggle("visible");
})