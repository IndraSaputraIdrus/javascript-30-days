/** @type { HTMLCanvasElement } canvas */
const canvas = document.getElementById("draw")
const resetButton = document.getElementById("reset");

const context = canvas.getContext("2d")
//canvas.width = window.innerWidth
//canvas.height = window.innerHeight

canvas.width = 1000
canvas.height = 500
context.strokeStyle = "#BADA55"
context.lineJoin = "round"
context.lineCap = "round"

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

/** @param {MouseEvent} event  */
function draw(event) {
  if (!isDrawing) return

  const { offsetY, offsetX } = event

  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath()

  // start from
  context.moveTo(lastX, lastY)

  // go to
  context.lineTo(offsetX, offsetY)
  context.stroke()

  updatePosition(offsetX, offsetY)

  if (hue >= 360) {
    hue = 0
  } else {
    hue++
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction
  }

  if (direction) {
    context.lineWidth++
  } else {
    context.lineWidth--
  }
}

/** @param {MouseEvent} event */
function startDrawing(event) {
  isDrawing = true;
  updatePosition(event.offsetX, event.offsetY)
}

function stopDrawing() {
  isDrawing = false;
}

function updatePosition(offsetX, offsetY) {
  lastX = offsetX
  lastY = offsetY
}


function resetCanvas() {
  // Bersihkan seluruh canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  // Reset semua pengaturan ke nilai awal
  hue = 0;
  context.lineWidth = 1;
  direction = true;
  // Jika ingin mereset posisi terakhir
  lastX = 0;
  lastY = 0;
}


function cleanup() {
  canvas.removeEventListener("mousemove", draw);
  canvas.removeEventListener("mousedown", startDrawing);
  canvas.removeEventListener("mouseup", stopDrawing);
}

canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mousedown", startDrawing)
canvas.addEventListener("mouseup", stopDrawing)

resetButton.addEventListener("click", resetCanvas);

window.addEventListener("beforeunload", cleanup);
