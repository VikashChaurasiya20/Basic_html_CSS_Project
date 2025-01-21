const letters = document.querySelectorAll(".letter span")
letters.forEach((el)=>{
el.addEventListener("click",(e)=>{
e.target.classList.add("active")
})
})