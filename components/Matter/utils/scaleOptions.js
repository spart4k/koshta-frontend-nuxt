let scaleOptions = (container) => {
  let maxSize = null
  if (container.offsetWidth >= 768) {
      maxSize = 6000
      console.log(maxSize)
    }
  else {
    maxSize = 4800
  }
  var scaleParams = container.offsetWidth
  var procent = scaleParams/maxSize
  return procent
}
export default scaleOptions