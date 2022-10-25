import Matter from "matter-js";

const craeteEngine = () => {
  var Engine = Matter.Engine,
      engine = Engine.create();
  return engine
}
export default craeteEngine

