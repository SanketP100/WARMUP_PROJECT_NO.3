const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  }
}


document.querySelector("#contener").addEventListener("mousemove", throttleFunction((dit) => {
  var div = document.createElement("div")
  div.classList.add("imgdiv")

  div.style.left = dit.clientX - 100 + 'px'
  div.style.top = dit.clientY - 280 + 'px'

  
var img = document.createElement("img")
img.setAttribute("src", "./project_20220729_1711234-01_AqKEbRv65-removebg-preview.png")
div.appendChild(img)
document.body.appendChild(div)



gsap.to(img, {
  y: "0",
  ease: Power4,
  duration: .5,
})

gsap.to(img, {
  y: "100%",
  delay: .6,
  ease: Power2,
})

setTimeout(function () {
  div.remove()
},1500)
},170));


