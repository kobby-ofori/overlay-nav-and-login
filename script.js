const signInBtn = document.getElementById("btn1");
const container = document.getElementById("container");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementsByClassName("overlay");

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

signInBtn.addEventListener('click', ()=> {
  container.style.transform = "scale(1)";
});

closeIcon.addEventListener("click", () => {
  container.style.transform = "scale(0)";
});

if (container.style.transform = "scale(1)") {
  nav.style.width = "0%";
}

// if (
//   signInBtn.addEventListener("click", () => {
//     container.style.transform = "scale(1)";
//   })
// ) {
//   // nav.style.transform = "scale(0)";
//   closeNav;
// }

