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
      return props.centerOptions
    })
    onMounted(() => {
      console.log(window.devicePixelRatio)
      setTimeout(() => {
        initMatter()
      }, 300)
      
    })
    const initMatter = () => {
      const el = document.getElementById('start-matter')
      var canvas = document.getElementById('wrap')
      // var PIXEL_RATIO = (function () {
      // var ctx = canvas.getContext("2d"),
      //     dpr = window.devicePixelRatio || 1,
      //     bsr = ctx.webkitBackingStorePixelRatio ||
      //           ctx.mozBackingStorePixelRatio ||
      //           ctx.msBackingStorePixelRatio ||
      //           ctx.oBackingStorePixelRatio ||
      //           ctx.backingStorePixelRatio || 1;

      // return dpr / bsr;
      // })();


      // var createHiDPICanvas = function(w, h, ratio) {
      //     if (!ratio) { ratio = PIXEL_RATIO; }
      //     var can = document.createElement("canvas");
      //     can.width = w * ratio;
      //     can.height = h * ratio;
      //     can.style.width = w + "px";
      //     can.style.height = h + "px";
      //     can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);
      //     return can;
      // }

      //Create canvas with the device resolution.
      // createHiDPICanvas(2000, 1000);
      //Create canvas with a custom resolution.
      // createHiDPICanvas(1900, 1000, 4);
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
        // const { width, height } = this.$el.getBoundingClientRect();
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
      // canvas.clientWidth = canvas.width * window.devicePixelRatio
      // canvas.clientHeight = canvas.height * window.devicePixelRatio


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
          path: 'path50.png',
        },
        {
          path: 'path18.png',
        },
        {
          path: 'path16.png',
        },
        {
          path: 'path20.png',
        },
        {
          path: 'path24.png',
        },
        {
          path: 'path62.png',
        },
        {
          path: 'path64.png',
        },
        {
          path: 'path22.png',
        },
        {
          path: 'path38.png',
        },
        {
          path: 'Group 7.png',
        },
        {
          path: 'Vector.png',
        }
      ]
      const maxSize = 3200
      var scaleParams = container.offsetWidth
      var procent = scaleParams/maxSize
      // bounes.forEach((item) => {
      //   item.
      // })
      
      
      // add mouse control
      // keep the mouse in sync with rendering
      
      const addBodies = () => {
        var ground = Bodies.rectangle(canvas.clientWidth / 2, canvas.clientHeight + 30, canvas.clientWidth, 60, {
          isStatic: true, label: "Ground", density: 1.4,
        });
        var wallLeft = Bodies.rectangle(-30, canvas.clientHeight / 2, 60, canvas.clientHeight * 3, {
          isStatic: true, label: "Wall Left", density: 1.4,
        });
        var wallRight = Bodies.rectangle(canvas.clientWidth + 30, canvas.clientHeight / 2, 60, canvas.clientHeight * 3, {
          isStatic: true, label: "Wall Right", density: 1.4,
        });
        var textBlock = Bodies.rectangle( canvas.clientWidth / 2,canvas.clientHeight / 2,canvas.clientWidth/1.8, props.centerOptions.height,{
          isStatic: true, label: "Center", density: 1.4, render: {
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
          console.log(canvas.clientWidth/12.5)
          var bounce = Bodies.circle(canvas.clientWidth/2, -300 - index * 900,canvas.clientWidth/12.5, {
            label: `bounce_${index}`,
            density: 2,
            restitution: .8,
            render: {
              pixelRatio: window.devicePixelRatio,
              sprite: {
                  // texture: require('@/assets/images/Group 3.png'),
                  texture: getImage(item.path),
                  pixelRatio: window.devicePixelRatio,
                  xScale: procent,
                  yScale: procent
              }
            }}
          )
          // bounes.push(bounce)
          Matter.Composite.add(engine.world, bounce)
        })
      }
      addBounces()
      addBodies()
      window.addEventListener("resize", function () {
        // render.canvas.remove();
        scaleParams = container.offsetWidth
        procent = scaleParams/maxSize
        console.log(window.devicePixelRatio)
        canvas.width = container.offsetWidth * window.devicePixelRatio
        canvas.height = container.offsetHeight * window.devicePixelRatio
        canvas.style.width = container.offsetWidth + 'px'
        // console.log(canvas.clientWidth)
        // bounes.forEach((item) => {
        //   // Matter.Body.scale(item, 1.2, 1.2)
        //   Matter.Composite.remove(engine.world, item)
        // })
        Matter.Composite.clear(engine.world);
        // Matter.Body.setPosition(ground, {x: canvas.clientWidth / 2, y: canvas.clientHeight + 30})
        // Matter.Body.setPosition(wallRight, {x: canvas.clientWidth + 30, y: canvas.clientHeight / 2})
        // Matter.Body.setPosition(textBlock, {x: canvas.clientWidth / 2, y: canvas.clientHeight / 2})
        addBounces()
        addBodies()
        // addBodies()
        
          // render.canvas.remove();
          // Render.run(render);
          // World.clear(engine.world)
          // Runner.run(runner, engine);
          // World.add(world, [
          //   ground,wallLeft, wallRight, ...bounes
          // ]);
          // Matter.Body.scale( textBlock, 1.005, 1.005);
          
          
          
          // Render.run(render);
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
  min-height: -webkit-fill-available;
}
svg {
  display: none;
}
* {
  padding: 0;
  margin: 0;
}
</style>
  