<template>
  <div id="footer-matter">
    <canvas id="wrap-footer"></canvas>
  </div>
</template>

<script>
import "pathseg";
import Matter from "matter-js";
import EngineCreate from './utils/engineCreate.js';
import RenderCreate from './utils/renderCreate.js';
import setWidth from './utils/setWidth.js';
import scaleOptions from './utils/scaleOptions.js';
import setWalls from './utils/setWalls.js';
import mouseConstraint from './utils/mouseConstraint.js'
import bounceOptionsFooter from './utils/bounceOptionsFooter.js';
import startGyroScope from './utils/startGyroscope.js'
import { onMounted, computed, useContext } from '@nuxtjs/composition-api'

export default {
  name: "start-matter",
  components: {},
  props: {
    centerOptions: {
      type: Object,
      default: () => { }
    }
  },
  setup(props, _) {
    const { store } = useContext()
    const centerOptions = computed(() => {
      return props.centerOptions
    })
    onMounted(() => {
      // startObserveFooter()
      // initMatter()
      setTimeout(() => {
        initMatter()
      }, 300)

    })
    const initMatter = () => {
      const container = document.getElementById('footer-matter')
      var canvas = document.getElementById('wrap-footer')
      var pixelsRatio = window.devicePixelRatio
      var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Events = Matter.Events;

      // create engine
      var engine = EngineCreate(),
          { world } = engine;
      world.gravity.y = 1.8;
      // const { width, height } = this.$el.getBoundingClientRect();
      // create renderer
      var render = RenderCreate(container, canvas, engine)
      canvas.style.width = container.offsetWidth + 'px'
      setWidth(canvas, container, pixelsRatio)
      Render.run(render);

      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      const sprites = [
        {
          path: '6.webp',
        },
        {
          path: 'path64.webp',
        },
        {
          path: 'path38.webp',
        },
        {
          path: '28.webp',
        }
      ]
      const addBounces = () => {
        // let procent = scaleOptions(container,canvas)
        setWidth(canvas, container, pixelsRatio)
        sprites.forEach((item, index) => {
          const getImage = (path) => {
            return require(`@/assets/images/${path}`)
          }
          const imageUrl = getImage(item.path)
          const image = new Image()
          image.onload = () => {
            console.log(bounceOptionsFooter(canvas, container, index))
            const {x, y, width} = bounceOptionsFooter(canvas, container, index)
            const scaleWidth = width/image.width
            const scaleHeight = width/image.height
            var bounce = Bodies.circle(x, y, width/2, {
              label: `bounce_${index}`,
              density: 4,
              isStatic: container.offsetWidth <= 768 ? false : true,
              mass: 10,
              // force: { x: 3, y: 3 },
              restitution: .5,
              inverseMass: 1/10,
              render: {
                sprite: {
                    // texture: require('@/assets/images/Group 3.png'),
                    texture: imageUrl,
                    xScale: scaleWidth,
                    yScale: scaleWidth
                }
              }}
            )
            // bounes.push(bounce)
            Matter.Composite.add(engine.world, bounce)
            // Matter.Body.setVelocity(bounce, { x: 0, y: 5 })
          }
          image.src = imageUrl
          
        })
        
      }
      const addBodies = () => {
        var { ground, wallLeft, wallRight, roof } = setWalls(canvas, props.centerOptions)
        // var ground = Bodies.rectangle(canvas.clientWidth / 2, canvas.clientHeight + 30, canvas.clientWidth, 60, {
        //   isStatic: true, label: "Ground", density: 1.4, render: {
        //     fillStyle: 'white'
        //   }
        // });
        // var roof = Bodies.rectangle(canvas.clientWidth / 2, 0 - 30, canvas.clientWidth, 60, {
        //   isStatic: true, label: "Roof", density: 1.4, render: {
        //     fillStyle: 'white'
        //   }
        // });
        // var wallLeft = Bodies.rectangle(-30, canvas.clientHeight / 2, 60, canvas.clientHeight * 3, {
        //   isStatic: true, label: "Wall Left", density: 1.4,
        // });
        // var wallRight = Bodies.rectangle(canvas.clientWidth + 30, canvas.clientHeight / 2, 60, canvas.clientHeight * 3, {
        //   isStatic: true, label: "Wall Right", density: 1.4,
        // });
        Matter.Composite.add(engine.world, [
          ground, wallLeft, wallRight, roof
        ])
        // var mouse = Mouse.create(render.canvas),
        // mouseConstraint = MouseConstraint.create(engine, {
        //   mouse: mouse,
        //   constraint: {
        //     stiffness: 0.2,
        //     render: {
        //       visible: false
        //     }
        //   }
        // });
        var mouse = Mouse.create(render.canvas),
            mouseConstraintHandler = mouseConstraint(engine, mouse, store);
        if (container.offsetWidth >= 768) {
          World.add(world, mouseConstraintHandler);
        }
        render.mouse = mouse;
        // if (window.location.pathname === '/') {
        //   if (container.offsetWidth < 768) {
        //     World.add(world, mouseConstraint);
        //     Events.on(mouseConstraint, "startdrag", (e) => {
        //       store.commit('fullpage/changeState', true)
        //       store.commit('matter/changeState', true)
        //     })
        //     Events.on(mouseConstraint, "enddrag", (e) => {
        //       store.commit('fullpage/changeState', false)
        //       store.commit('matter/changeState', false)
        //     })
        //     render.mouse = mouse;
        //   } else {
        //     return 
        //   }
        // } else {
        //   World.add(world, mouseConstraint);
        //   Events.on(mouseConstraint, "startdrag", (e) => {
        //     store.commit('fullpage/changeState', true)
        //     store.commit('matter/changeState', true)
        //   })
        //   Events.on(mouseConstraint, "enddrag", (e) => {
        //     store.commit('fullpage/changeState', false)
        //     store.commit('matter/changeState', false)
        //   })
        //   render.mouse = mouse;
        // }
        
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
      startGyroScope(world)
      const shakeBodies = () => {
        bounes.forEach((item) => {
          // Matter.Body.translate(item, {x: 0, y: -100})
          Matter.Body.setStatic(item, true);
          let i = 0;
          while (i < 10) { // выводит 0, затем 1, затем 2
            i++;
            Matter.Body.setPosition(item, { x: item.position.x, y: item.position.y - i });
            // Matter.Body.setVelocity(item, {x : 0, y : 1});
          }
          Matter.Body.setStatic(item, false);
        })
      }
      
      canvas.addEventListener("wheel", (e) => {
      })
    }
    
    return {
      centerOptions
    }
  }
};
</script>

<style scoped>
#footer-matter {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #929292;
  min-height: 100%;
  line-height: 0;
  width: 100%;
}

svg {
  display: none;
}

* {
  padding: 0;
  margin: 0;
}
</style>
  