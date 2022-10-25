let bounseOptions = (canvas,container, index) => {
  let bounceWidth = null
  let optBounce = {
    x: null,
    y: null,
    width: null
  }
  if (container.offsetWidth >= 768) {
    bounceWidth = canvas.clientWidth/11
    optBounce = {
      x: 100 + index * bounceWidth,
      y:  -800 - index * bounceWidth,
      width: bounceWidth
    }
    }
  else {
    bounceWidth = canvas.clientWidth/7.5
    optBounce = {
      x: 0 + index * bounceWidth/2,
      y:  -800 - index * (bounceWidth + 200 ),
      width: bounceWidth
    }
  }
  return {
    ...optBounce
  }
}
export default bounseOptions