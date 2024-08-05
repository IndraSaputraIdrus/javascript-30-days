/** @param {string} classes  */
/** @param {HTMLImageElement} element */
function addClasses(classes, element) {
  classes.split(" ").forEach(item => {
    element.classList.add(item)
  })
}

const imageSource = [
  "./assets/images/images_1.png",
  "./assets/images/images_2.png",
  "./assets/images/images_3.png",
  "./assets/images/images_4.png",
  "./assets/images/images_5.png",
  "./assets/images/images_6.png",
  "./assets/images/images_7.png",
  "./assets/images/images_8.png",
  "./assets/images/images_9.png",
]

const container = document.querySelector("#container")
imageSource.forEach((src, index) => {
  const imgTag = document.createElement("img")
  const div = document.createElement("div")
  const number = document.createElement("p")
  const overlay = document.createElement("div")

  imgTag.src = src
  imgTag.alt = index
  addClasses("w-full h-full object-cover border border-slate-500", imgTag)

  number.textContent = index + 1
  addClasses("transition-all duration-500 font-bold text-white text-7xl opacity-0", number)
  addClasses("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80px] z-[200]", number)

  addClasses("transition-all ease-in-out duration-500 absolute inset-0 w-full h-full z-[100]", overlay)

  addClasses("transition-all duration-500 flex-1 relative", div)
  div.addEventListener("click", () => {
    div.classList.toggle("flex-[5]")
    div.classList.toggle("flex-1")
    overlay.classList.toggle("bg-black/60")
    number.classList.toggle("opacity-0")
    number.classList.toggle("-translate-y-[80px]")
    number.classList.toggle("-translate-y-1/2")
  })

  div.appendChild(imgTag)
  div.appendChild(number)
  div.appendChild(overlay)
  container.appendChild(div)
})

