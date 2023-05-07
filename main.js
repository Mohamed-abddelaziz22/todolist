const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.getElementById("container");
// const input = document.getElementsByClassName("input");


form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
  <span class="icon-star"></span>
  <p class="nn">${input.value}</p>
  <div>
    <span class="icon-trash-o"> </span>
    <span class="icon-angry"></span>

    <!-- <span class="icon-heart"> </span> -->
  </div>
  </div>`;
  container.innerHTML += task;
  input.value=""
});

container.addEventListener("click" , (eo) => { 
  if (eo.target.className=="icon-trash-o") {
    eo.target.parentElement.parentElement.remove()
  } else if(eo.target.className=="icon-angry"){
    
   eo.target.parentElement.parentElement.getElementsByClassName("nn")[0].classList.add("gg")
    
    const heart = `<span class="icon-heart"> </span>`
    eo.target.classList.add("dd")
    eo.target.parentElement.innerHTML+=heart

  }else if (eo.target.className=="icon-heart"){
    eo.target.parentElement.parentElement.getElementsByClassName("nn")[0].classList.remove("gg")
    eo.target.classList.add("dd")
const addang = `<span class="icon-angry"></span>`
eo.target.parentElement.innerHTML+=addang


  }else if (eo.target.className=="icon-star"){
    eo.target.classList.add("ggggg")
    container.prepend(eo.target.parentElement)


  }else if (eo.target.className=="icon-star ggggg"){
    eo.target.classList.remove("ggggg")
  }

 })
