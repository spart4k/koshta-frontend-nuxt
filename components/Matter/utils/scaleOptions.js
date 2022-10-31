let scaleOptions = (container) => {
  let maxSize = null
  const square = canvas.width * canvas.height/100
  const targetWidth = Math.sqrt(square)
  return targetWidth
  // if (container.offsetWidth >= 768) {
  //     maxSize = 6000
  //     console.log(maxSize)
  //   }
  // else {
  //   maxSize = 4800
  // }
  // var scaleParams = container.offsetWidth
  // var procent = scaleParams/maxSize
  // return procent
}
export default scaleOptions