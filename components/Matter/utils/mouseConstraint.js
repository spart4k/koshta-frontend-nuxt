import Matter from 'matter-js'
let MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events;
const mouseConstraint = (engine, mouse, store) => {
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });
  Events.on(mouseConstraint, "startdrag", (e) => {
    store.commit('fullpage/changeState', true)
    store.commit('matter/changeState', true)
  })
  Events.on(mouseConstraint, "enddrag", (e) => {
    store.commit('fullpage/changeState', false)
    store.commit('matter/changeState', false)
  })
  return mouseConstraint
}
export default mouseConstraint