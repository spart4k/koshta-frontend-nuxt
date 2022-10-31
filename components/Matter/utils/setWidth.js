const setWidth = (canvas, container) => {
    const pixelsRatio = window.devicePixelRatio;
    canvas.width = container.offsetWidth * pixelsRatio;
    canvas.height = container.offsetHeight * pixelsRatio;
}
export default setWidth