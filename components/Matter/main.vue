<template>
  <div id="start-matter">
    <canvas id="wrap"></canvas>
  </div>
</template>

<script>
import "pathseg";
import Matter from "matter-js";
import { onMounted, computed, useContext } from '@nuxtjs/composition-api'

export default {
  name: "start-matter",
  components: {},
  props: {
    centerOptions: {
      type: Object,
      default: () => {}
    }
  },
  setup(props,_) {
    const { store } = useContext()
    const centerOptions = computed(() => {
      return props?.centerOptions
    })
    onMounted(() => {
      setTimeout(() => {
        initMatter()
      }, 0)
      
    })
    const initMatter = () => {
      const el = document.getElementById('start-matter')
      var canvas = document.getElementById('wrap')
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Events = Matter.Events;

      // create engine
      var engine = Engine.create(),
      world = engine.world;
      world.gravity.y = 1.8;
      if (el.offsetWidth <= 768) {
        world.gravity.y = 1
      }
      // create renderer
      var container = el
      var render = Render.create({
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
      canvas.width = container.offsetWidth * window.devicePixelRatio;
      canvas.height = container.offsetHeight * window.devicePixelRatio;


      Render.run(render);
      
      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      const sprites = [
        {
          path: 'path40.png',
        },
        {
          path: 'path12.png',
        },
        {
          path: '4 1.png',
        },
        {
          path: '39 1.png',
        },
        {
          path: 'path50.png',
        },
        {
          path: 'path20.png',
        },
        // {
        //   path: 'path24.png',
        // },
        {
          path: 'path64.png',
        },
        {
          path: 'path22.png',
        },
        {
          path: 'path62.png',
        },
        {
          path: 'path38.png',
        },
        {
          path: 'Group 7.png',
        },
        // {
        //   path: 'Vector.png',
        // }
      ]
      let maxSize = null
      if (container.offsetWidth >= 768) {
          maxSize = 5800
        }
      else {
        maxSize = 3700
      }
      var scaleParams = container.offsetWidth
      var procent = scaleParams/maxSize
      
      
      // add mouse control
      // keep the mouse in sync with rendering
      
      const addBodies = () => {
        var ground = Bodies.rectangle(canvas.clientWidth / 2, canvas.clientHeight + 30, canvas.clientWidth, 60, {
          isStatic: true, label: "Ground", density: 0, render: {
            fillStyle: 'white'
          }
        });
        var wallLeft = Bodies.rectangle(-30, canvas.clientHeight / 2, 60, canvas.clientHeight * 6, {
          isStatic: true, label: "Wall Left", density: 0,
        });
        var wallRight = Bodies.rectangle(canvas.clientWidth + 30, canvas.clientHeight / 2, 60, canvas.clientHeight * 6, {
          isStatic: true, label: "Wall Right", density: 0,
        });
        var textBlock = Bodies.rectangle( canvas.clientWidth / 2,canvas.clientHeight / 2,canvas.clientWidth/1.8, props.centerOptions.height,{
          isStatic: true, label: "Center", density: 0, render: {
            fillStyle: 'transparent'
          }
        });
        Matter.Composite.add(engine.world, [
          ground,wallLeft, wallRight
        ])
        if (container.offsetWidth >= 768) {
          World.add(world, [
            textBlock
          ]);
        }
        var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              visible: false
            }
          }
        });
        World.add(world, mouseConstraint);
        Events.on(mouseConstraint, "startdrag", (e) => {
          store.commit('fullpage/changeState', true)
          store.commit('matter/changeState', true)
        })
        Events.on(mouseConstraint, "enddrag", (e) => {
          store.commit('fullpage/changeState', false)
          store.commit('matter/changeState', false)
        })
        render.mouse = mouse;
      }
      const addBounces = () => {
        canvas.width = container.offsetWidth * window.devicePixelRatio
        canvas.height = container.offsetHeight * window.devicePixelRatio
        sprites.forEach((item, index) => {
          const getImage = (path) => {
            return require(`@/assets/images/${path}`)
          }
          let bounceWidth = null
          let optBounce = {
            x: null,
            y: null,
            width: null
          }
          if (container.offsetWidth >= 768) {
            bounceWidth = canvas.clientWidth/11
            optBounce = {
              x: 100 + index * bounceWidth,
              y:  -800 - index * bounceWidth,
              width: bounceWidth
            }
            }
          else {
            bounceWidth = canvas.clientWidth/7.5
            optBounce = {
              x: 0 + index * bounceWidth/2,
              y:  -800 - index * (bounceWidth + 200 ),
              width: bounceWidth
            }
          }
          
          var bounce = Bodies.circle(optBounce.x, optBounce.y, optBounce.width, {
            label: `bounce_${index}`,
            density: 6,
            mass: 5,
            restitution: .6,
            inverseMass: 1/5,
            render: {
              pixelRatio: window.devicePixelRatio,
              sprite: {
                  texture: getImage(item.path),
                  pixelRatio: window.devicePixelRatio,
                  xScale: procent,
                  yScale: procent
              }
            }}
          )
          Matter.Composite.add(engine.world, bounce)
          Matter.Body.setVelocity(bounce, { x: 0, y: 5 })
          if (container.offsetWidth >= 1280) {
            Matter.Body.setVelocity(bounce, { x: 0, y: 5 })
          } else {
            Matter.Body.setVelocity(bounce, { x: 0, y: 0 })
          } 
        })
      }
      addBounces()
      addBodies()
      window.addEventListener("resize", function () {
        scaleParams = container.offsetWidth
        procent = scaleParams/maxSize
        canvas.width = container.offsetWidth * window.devicePixelRatio
        canvas.height = container.offsetHeight * window.devicePixelRatio
        canvas.style.width = container.offsetWidth + 'px'
        canvas.style.height = container.offsetHeight + 'px'
        Matter.Composite.clear(engine.world);
        addBounces()
        addBodies()
      });
    }
    return {
      centerOptions
    }
  }
};
</script>

<style>
#start-matter {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #929292;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
}
svg {
  display: none;
}
* {
  padding: 0;
  margin: 0;
}
</style>
  