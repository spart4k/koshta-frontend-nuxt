let bounseOptions = (canvas,container, index) => {
  const square = canvas.width * canvas.height
  let widthBody = null
  if (container.offsetWidth >= 768) {
    widthBody = 6
  } else {
    widthBody = 7
  }
  const targetWidth = (Math.sqrt(square)/widthBody)/window.devicePixelRatio
  let optBounce = {
    x: null,
    y:  null,
    width: null
  }
  if (container.offsetWidth >= 768) {
    optBounce = {
      x: 100 + index * (targetWidth/2),
      y:  -300 - index * targetWidth,
      width: targetWidth
    }
    
  }
  else {
    optBounce = {
      x: 0 + (index * targetWidth/3),
      y:  -300 - index * (targetWidth + 200 ),
      width: targetWidth
    }
  }
  return {
    ...optBounce
  }
}
export default bounseOptions