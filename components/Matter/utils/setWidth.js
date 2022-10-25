const setWidth = (canvas, container, pixelsRatio) => {
    console.log(container)
    canvas.width = container.offsetWidth * pixelsRatio,
    canvas.height = container.offsetHeight * pixelsRatio
}
export default setWidth