let bounseOptions = (canvas,container, index) => {
  const square = canvas.width * canvas.height
  let widthBody = null
  if (container.offsetWidth >= 768) {
    widthBody = 5
  } else {
    widthBody = 6.2
  }
  const targetWidth = (Math.sqrt(square)/widthBody)/window.devicePixelRatio
  let optBounce = {
    x: (canvas.clientWidth / 2 - (targetWidth * 3)) + index * 100,
    y: canvas.clientHeight - 150,
    width: targetWidth
  }
  return {
    ...optBounce
  }
}
export default bounseOptions