/** @type {htmldivelement} */
const secondhand = document.querySelector(".clock__hand.clock__hand--second")

/** @type {HTMLDivElement} */
const minutesHand = document.querySelector(".clock__hand.clock__hand--minute")

/** @type {HTMLDivElement} */
const hourHand = document.querySelector(".clock__hand.clock__hand--hour")

/** @type {HTMLDivElement} */
const clock2Secondhand = document.querySelector(".clock2__hand.clock2__hand--second")

const setDate = () => {
  const now = new Date()

  const second = now.getSeconds()
  const secondDegrees = (second / 60) * 360
  secondhand.style.setProperty("--rotate", `${secondDegrees}deg`)

  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360
  minutesHand.style.setProperty("--rotate", `${minutesDegrees}deg`)

  const hour = now.getHours()
  const hourDegrees = (hour / 60) * 360
  hourHand.style.setProperty("--rotate", `${hourDegrees}deg`)

  //console.log({ hour, minutes, second })
}

setInterval(setDate, 1000)

const setLabel = (count, value) => {
  return Array(count).fill(value).reduce((acc, curr) => `${curr} ${acc}`, "")
}

