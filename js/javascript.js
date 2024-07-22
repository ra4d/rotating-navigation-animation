const enter = document.querySelector(".open");
const exists = document.querySelector(".close");
const container = document.querySelector(".container");
enter.addEventListener("click" , ()=>{container.classList.add("rcontainer")})
exists.addEventListener("click" , ()=>{container.classList.remove("rcontainer")})


