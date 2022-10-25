let scaleOptions = (container) => {
  let maxSize = null
  if (container.offsetWidth >= 768) {
      maxSize = 5800
    }
  else {
    maxSize = 3700
  }
  var scaleParams = container.offsetWidth
  var procent = scaleParams/maxSize
  return {
    maxSize,
    scaleParams,
    procent
  }
}
export default scaleOptions