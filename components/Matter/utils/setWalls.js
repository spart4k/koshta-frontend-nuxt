import Matter from 'matter-js'
var Bodies = Matter.Bodies;
let boxBodies = (canvas,centerOptions) => {
  var ground = Bodies.rectangle(canvas.clientWidth / 2, canvas.clientHeight + 30, canvas.clientWidth, 60, {
    isStatic: true, label: "Ground", density: 0, render: {
      fillStyle: 'white'
    }
  });
  var wallLeft = Bodies.rectangle(-30, canvas.clientHeight / 2, 60, canvas.clientHeight * 6, {
    isStatic: true, label: "Wall Left", density: 0, render: {
      fillStyle: 'white'
    }
  });
  var wallRight = Bodies.rectangle(canvas.clientWidth + 30, canvas.clientHeight / 2, 60, canvas.clientHeight * 6, {
    isStatic: true, label: "Wall Right", density: 0, render: {
      fillStyle: 'white'
    }
  });
  var textBlock = Bodies.rectangle( canvas.clientWidth / 2,canvas.clientHeight / 2,canvas.clientWidth/1.8, centerOptions?.height,{
    isStatic: true, label: "Center", density: 0, render: {
      fillStyle: 'transparent'
    }
  });
  var roof = Bodies.rectangle(canvas.clientWidth / 2, 0 - 30, canvas.clientWidth, 60, {
    isStatic: true, label: "Roof", density: 1.4, render: {
      fillStyle: 'white'
    }
  });
  return {
    ground,
    wallLeft,
    wallRight,
    textBlock,
    roof
  }
}
export default boxBodies