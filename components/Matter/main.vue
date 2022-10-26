<template>
  <div id="start-matter">
    <canvas id="wrap"></canvas>
  </div>
</template>

<script>
import Matter from "matter-js";
import EngineCreate from './utils/engineCreate.js';
import RenderCreate from './utils/renderCreate.js';
import setWidth from './utils/setWidth.js';
import scaleOptions from './utils/scaleOptions.js';
import setWalls from './utils/setWalls.js';
import mouseConstraint from './utils/mouseConstraint.js'
import bounceOptions from './utils/bounceOptions.js';
// import createBody from './utils/bounceCreate.js';
import startGyroScope from './utils/startGyroscope.js'
import { onMounted, ref, computed, useContext } from '@nuxtjs/composition-api'

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
      }, 200)
      
    })
    const gyrascopeX = ref(1)
    const gyrascopeY = ref(1)
    const initMatter = () => {
      const container = document.getElementById('start-matter')
      var canvas = document.getElementById('wrap')
      var pixelsRatio = window.devicePixelRatio
      var Render = Matter.Render,
          Runner = Matter.Runner,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies
      // create engine
      var engine = EngineCreate(),
          { world } = engine;
      world.gravity.y = 1.8;
      if (container.offsetWidth <= 768) {
        world.gravity.y = 1
      }
      // create renderer
      var render = RenderCreate(container, canvas, engine)
      setWidth(canvas, container, pixelsRatio)
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
      
      // add bodies for box 
      const addBodies = () => {
        const { ground, wallLeft, wallRight, textBlock } = setWalls(canvas, props.centerOptions)
        Matter.Composite.add(engine.world, [
          ground,wallLeft, wallRight
        ])
        if (container.offsetWidth >= 768) {
          World.add(world, [
            textBlock
          ]);
        }
        var mouse = Mouse.create(render.canvas),
            mouseConstraintHandler = mouseConstraint(engine, mouse, store)
        World.add(world, mouseConstraintHandler);
        render.mouse = mouse;
      }
      // set option for scale and craete bodies
      const addBounces = () => {
        setWidth(canvas, container, pixelsRatio)
        let procent = scaleOptions(container)
        sprites.forEach((item, index) => {
          const getImage = (path) => {
            return require(`@/assets/images/${path}`)
          }
          const image = getImage(item.path)
          const {x, y, width} = bounceOptions(canvas, container, index)
          var bounce = Bodies.circle(x, y, width, {
            label: `bounce_${index}`,
            density: 6,
            mass: 5,
            restitution: .6,
            inverseMass: 1/5,
            render: {
              pixelRatio: pixelsRatio,
              sprite: {
                  texture: image,
                  pixelRatio: pixelsRatio,
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
        setWidth(canvas, container, pixelsRatio)
        canvas.style.width = container.offsetWidth + 'px'
        canvas.style.height = container.offsetHeight + 'px'
        Matter.Composite.clear(engine.world);
        addBounces()
        addBodies()
      });
      // const startGyro = () => {
      //   let gyroscope = new Gyroscope({frequency: 60});
      //   gyroscope.addEventListener('reading', e => {
      //     console.log("Angular velocity along the X-axis " + gyroscope.x);
      //     console.log("Angular velocity along the Y-axis " + gyroscope.y);
      //     console.log("Angular velocity along the Z-axis " + gyroscope.z);
      //     // alert(gyroscope.x)
      //     gyrascopeX.value = gyroscope.x
      //     gyrascopeY.value = gyroscope.y
      //     world.gravity.x = gyroscope.x * 5
      //     world.gravity.y = gyroscope.y * 5 
      //   });
      //   console.log(gyroscope)
      //   setTimeout(() => {
      //     gyroscope.start();
      //   }, 4000)
      // }
      // startGyro()
      startGyroScope(world)
    }
    return {
      centerOptions,
      gyrascopeX,
      gyrascopeY
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
  width: 100%;
  min-height: -webkit-fill-available;
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
  