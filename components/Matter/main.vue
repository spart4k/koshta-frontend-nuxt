<template>
  <div id="start-matter">
    <canvas id="wrap"></canvas>
  </div>
</template>

<script>
import Matter from "matter-js";
import { debounce } from "debounce";
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
          Bodies = Matter.Bodies
      // create engine
      var engine = EngineCreate(),
          { world } = engine;
      world.gravity.y = 1.8;
      if (container.offsetWidth <= 768) {
        world.gravity.y = 2.2
      }
      // create renderer
      var render = RenderCreate(container, canvas, engine)
      console.log(render)
      setWidth(canvas, container)
      Render.run(render);
  
      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      const sprites = [
        {
          path: 'path40.webp',
          type: 'star'
        },
        {
          path: 'path50.webp',
          type: 'default'
        },
        {
          path: 'path22.webp',
          type: 'default'
        },
        {
          path: 'path20.webp',
          type: 'default'
        },
        {
          path: 'path64.webp',
          type: 'star'
        },
        {
          path: 'path38.webp',
          type: 'default'
        },
        {
          path: 'Group 7.webp',
          type: 'default'
        },
        {
          path: '6.webp',
          type: 'star'
        },
        {
          path: '16.webp',
          type: 'default'
        },
        {
          path: '28.webp',
          type: 'default'
        },
        {
          path: '32.webp',
          type: 'star'
        }
      ]
      
      // add bodies for box 
      const addBodies = () => {
        setWidth(canvas, container)
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
          const getVertices = () => {
            [
              {x: width/5, y: 0},{x: 0, y: width/5},{x: width/5, y: width/2},{x: 0, y: 80},
              {x: width/5, y: width}, {x: width/5, y: 80}, {x: 80, y: width}, {x: width, y: 80}, {x: 80, y: width/2}, {x: 100, y: width/5}, {x: 80, y: 0}, {x: width/2, y: width/5}, {x: width/5, y: 0} 
            ]
          }
          image.onload = () => {
            const {x, y, width} = bounceOptions(canvas, container, index)
            const scaleWidth = width/image.width
            const scaleHeight = width/image.height
            // var bounce = Bodies.fromVertices(x, y, [
            //   {x: 20, y: 0},{x: 0, y: 20},{x: 15, y: 50},{x: 0, y: 80},
            //   {x: 20, y: 100}, {x: 50, y: 80}, {x: 80, y: 100}, {x: 100, y: 80}, {x: 80, y: 50}, {x: 100, y: 20}, {x: 80, y: 0}, {x: 50, y: 20}, {x: 20, y: 0} ], {
              if (item.type !== 'star') {
                var bounce = Bodies.circle(x, y, width/2, {
                  label: `bounce_${index}`,
                  density: .2,
                  mass: 5,
                  restitution: .6,
                  // stiffness: 0.1,
                  inverseMass: 1/5,
                  render: {
                    strokeStyle: '#000000',
                    lineWidth: 5,
                    sprite: {
                        texture: imageUrl,
                        xScale: scaleWidth,
                        yScale: scaleWidth
                    }
                  }}
                )
              } else {
                var bounce = Bodies.circle(x, y, (width/2) * 1.05, {
                  label: `bounce_${index}`,
                  density: .2,
                  mass: 5,
                  restitution: .6,
                  // stiffness: 0.1,
                  inverseMass: 1/5,
                  render: {
                    strokeStyle: '#000000',
                    lineWidth: 5,
                    sprite: {
                        texture: imageUrl,
                        xScale: scaleWidth * 0.95,
                        yScale: scaleWidth * 0.95
                    }
                  }}
                )
              }
            
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
          }
          image.src = imageUrl
        })
      }
      addBounces()
      addBodies()
      var setRoof
      setRoof = setTimeout(() => {
        console.log('add roof')
        var { roof } = setWalls(canvas, props.centerOptions)
        Matter.Composite.add(engine.world, [
          roof
        ])
        
        loaded = true
        setRoof = undefined
      }, 4000)
      window.addEventListener("resize", debounce(function () {
        render.options.pixelRatio = window.devicePixelRatio
        console.log('resize')
        loaded = false
        setWidth(canvas, container)
        canvas.style.width = container.offsetWidth + 'px'
        canvas.style.height = container.offsetHeight + 'px'
        Matter.Composite.clear(engine.world);
        if (setRoof) clearTimeout(setRoof)
        console.log(setRoof)
        setRoof = setTimeout(() => {
          console.log('add roof')
          var { roof } = setWalls(canvas, props.centerOptions)
          Matter.Composite.add(engine.world, [
            roof
          ])
          
          loaded = true
          setRoof = undefined
        }, 4000)
        setTimeout(() => {
          addBounces()
          addBodies()
        }, 0);
      }, 1000));
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
      if (container.offsetWidth <= 768) {
        setTimeout(() => {
          startGyroScope(world)
        }, 4000)
      }
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
  