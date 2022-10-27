let bounseOptions = (canvas,container, index) => {
  let bounceWidth = null
  let optBounce = {
    x: (canvas.clientWidth / 2 - (bounceWidth * 3)) + index * 100,
    y: canvas.clientHeight - 150,
    width: bounceWidth
  }
  if (container.offsetWidth >= 768) {
    optBounce.width = canvas.clientWidth/12
    }
  else {
    optBounce.width = canvas.clientWidth/9.5
  }
  console.log(bounceWidth)
  return {
    ...optBounce
  }
}
export default bounseOptions