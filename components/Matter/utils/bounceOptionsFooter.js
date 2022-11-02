let bounseOptions = (canvas,container, index) => {
  const square = canvas.width * canvas.height
  let widthBody = null
  if (container.offsetWidth >= 768) {
    widthBody = 6
  } else {
    widthBody = 7.2
  }
  const targetWidth = (Math.sqrt(square)/widthBody)/window.devicePixelRatio
  let optBounce = {
    x: (canvas.clientWidth / 2 - (targetWidth)) + index,
    y: canvas.clientHeight - 150,
    width: targetWidth
  }
  if (container.offsetWidth >= 768) {
    if (index === 0) {
      optBounce.x = 0 + (targetWidth/1.5)
      optBounce.y = targetWidth
    } else if (index === 1) {
      optBounce.x = 0 + targetWidth
      optBounce.y = canvas.clientHeight - targetWidth
    } else if (index === 2) {
      optBounce.x = (canvas.clientWidth - (targetWidth/4))
      optBounce.y = 200
    } else if (index === 3) {
      optBounce.x = (canvas.clientWidth - (targetWidth))
      optBounce.y = canvas.clientHeight - (targetWidth/3)
    }
  }
  
  console.log(optBounce.x)
  return {
    ...optBounce
  }
}
export default bounseOptions