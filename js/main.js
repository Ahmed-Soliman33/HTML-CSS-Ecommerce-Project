let logo = document.querySelector("#logo")
let headerElement = document.querySelector("#headerElement")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerElement.classList.add("scroll-down")
    logo.style.color = "#ff6584"
  }
  else {
    headerElement.classList.remove("scroll-down")
    logo.style.color = "#d81a40"
  }
})




