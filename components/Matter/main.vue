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
      let loaded = false
      const container = document.getElementById('start-matter')
      var canvas = document.getElementById('wrap')
      var pixelsRatio = window.devicePixelRatio
      var Render = Matter.Render,
          Runner = Matter.Runner,
          Mouse = Matter.Mouse,
          World = Matter.World,
          Bodies = Matter.Bodies,
          Constraint = Matter.Constraint
      // create engine
      var engine = EngineCreate(),
          { world } = engine;
      world.gravity.y = 1.8;
      if (container.offsetWidth <= 768) {
        world.gravity.y = 2.2
      }
      // create renderer
      var render = RenderCreate(container, canvas, engine)
      setWidth(canvas, container)
      Render.run(render);
  
      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      const sprites = [
        {
          path: 'path40.webp',
        },
        {
          path: 'path50.webp',
        },
        {
          path: 'path22.webp',
        },
        {
          path: 'path20.webp',
        },
        {
          path: 'path64.webp',
        },
        {
          path: 'path38.webp',
        },
        {
          path: 'Group 7.webp',
        },
        {
          path: '6.webp',
        },
        {
          path: '16.webp',
        },
        {
          path: '28.webp',
        },
        {
          path: '32.webp',
        },
        {
          path: '33.webp',
        }
      ]
      
      // add bodies for box 
      const addBodies = () => {
        var { ground, wallLeft, wallRight, textBlock, roof } = setWalls(canvas, props.centerOptions)
        Matter.Composite.add(engine.world, [
          ground,wallLeft, wallRight
        ])
        if (loaded) {
          Matter.Composite.add(engine.world, [
            roof
          ])
        }
        if (container.offsetWidth >= 768) {
          World.add(world, [
            textBlock
          ]);
        }
        var mouse = Mouse.create(render.canvas),
            mouseConstraintHandler = mouseConstraint(engine, mouse, store);
        if (container.offsetWidth >= 768) {
          World.add(world, mouseConstraintHandler);
        }
        render.mouse = mouse;
      }
      // set option for scale and craete bodies
      const addBounces = () => {
        // console.log(pixelsRatio, window.devicePixelRatio)
        setWidth(canvas, container)
        sprites.forEach((item, index) => {
          const getImage = (path) => {
            return require(`@/assets/images/${path}`)
          }
          // const targetWidth = scaleOptions(container)
          const imageUrl = getImage(item.path)
          const image = new Image()
          image.onload = () => {
            const {x, y, width} = bounceOptions(canvas, container, index)
            const scaleWidth = width/image.width
            const scaleHeight = width/image.height
            var bounce = Bodies.circle(x, y, width/2, {
              label: `bounce_${index}`,
              density: .2,
              mass: 5,
              restitution: .6,
              // stiffness: 0.1,
              inverseMass: 1/5,
              render: {
                sprite: {
                    texture: imageUrl,
                    xScale: scaleWidth,
                    yScale: scaleWidth
                }
              }}
            )
            // var constraint = Constraint.create({
            //   bodyB: body,
            //   stiffness: 0.001
            // });
            Matter.Composite.add(engine.world, bounce)
            Matter.Body.setVelocity(bounce, { x: 0, y: 5 })
            if (container.offsetWidth >= 1280) {
              Matter.Body.setVelocity(bounce, { x: 0, y: 5 })
            } else {
              Matter.Body.setVelocity(bounce, { x: 0, y: 0 })
            }
            Matter.Engine.update(engine)
            setTimeout(() => {
              if (container.offsetWidth <= 768 ) {
                var { roof } = setWalls(canvas, props.centerOptions)
                Matter.Composite.add(engine.world, [
                  roof
                ])
              }
              
              loaded = true
            }, 4000)
          }
          image.src = imageUrl
        })
      }
      addBounces()
      addBodies()
      // var constraint = Constraint.create({
      //   stiffness: 0.5
      // })
      window.addEventListener("resize", function () {
        loaded = false
        // var { roof } = setWalls(canvas, props.centerOptions)
        setWidth(canvas, container)
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
      setTimeout(() => {
        startGyroScope(world)
      }, 4000)
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
  