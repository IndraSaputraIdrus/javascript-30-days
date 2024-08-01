/** @type {HTMLDivElement} */
const secondHand = document.querySelector(".clock__hand.clock__hand--second")

/** @type {HTMLDivElement} */
const minutesHand = document.querySelector(".clock__hand.clock__hand--minute")

/** @type {HTMLDivElement} */
const hourHand = document.querySelector(".clock__hand.clock__hand--hour")

const createLabel = (count, parentElement) => {
  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.classList.add("label")
    parentElement.appendChild(span);
  }
}

/** 
* @param {HTMLSpanElement} element
* @param {number} degrees
* @param {content} string
*/
const rotateLabel = (element, degrees, label) => {
  element.innerHTML = label
  element.style.transform = `rotate(-${degrees}deg)`
}

createLabel(7, secondHand)
createLabel(5, minutesHand)
createLabel(4, hourHand)

const setDate = () => {
  const now = new Date()

  const second = now.getSeconds()
  const secondDegrees = (second / 60) * 360
  secondHand.style.setProperty("--rotate", `${secondDegrees}deg`)
  secondHand.childNodes.forEach((e) => rotateLabel(e, secondDegrees, second))

  const minutes = now.getMinutes()
  const minutesDegrees = (minutes / 60) * 360
  minutesHand.style.setProperty("--rotate", `${minutesDegrees}deg`)
  minutesHand.childNodes.forEach((e) => rotateLabel(e, minutesDegrees, minutes))

  const hour = now.getHours()
  const hourDegrees = (hour / 12) * 360
  hourHand.style.setProperty("--rotate", `${hourDegrees}deg`)
  hourHand.childNodes.forEach((e) => rotateLabel(e, hourDegrees, hour))

  //console.log({ hour, minutes, second })
}

setInterval(setDate, 1000)


