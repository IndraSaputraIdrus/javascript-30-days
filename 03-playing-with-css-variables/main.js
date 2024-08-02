/** @type {NodeListOf<HTMLInputElement>} */
const inputs = document.querySelectorAll(".form__control > input")

/** @this {HTMLInputElement} */
function handleInput() {
  const value = this.type === "range" ? `${this.value}px` : this.value
  document.documentElement.style.setProperty(`--${this.id}`, value)
}

for (const input of inputs) {
  input.addEventListener("input", handleInput)
}
