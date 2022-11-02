const setWidth = (canvas, container) => {
    const pixelsRatio = window.devicePixelRatio;
    console.log(pixelsRatio, window.devicePixelRatio)
    canvas.width = container.offsetWidth * window.devicePixelRatio;
    canvas.height = container.offsetHeight * window.devicePixelRatio;
}
export default setWidth