import Matter from "matter-js";
var Render = Matter.Render
 const craeteRender = (container, canvas, engine) => {
  return Render.create({
    element: container,
    canvas: canvas,
    engine: engine,
    options: {
      background: '#ffffff',
      width: container.offsetWidth,
      height: container.offsetHeight,
      wireframes: false,
      pixelRatio: window.devicePixelRatio
    }
  });
}

export default craeteRender