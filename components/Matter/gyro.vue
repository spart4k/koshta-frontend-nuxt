<template>
  <div id="footer-matter">
    <!-- <div class="gyro">
      <p>
        X:{{ gyrascopeX }}
      </p>
      <br>
      <p>
        Y:{{ gyrascopeY }}
      </p>
    </div> -->
    <canvas id="wrap-footer"></canvas>
    <!-- <div style="visibility: visible" class="ruquestGyro">
      <button id="notAccessRequest">
        No
      </button>
      <button id="accessRequest">
        Yes
      </button>
    </div> -->
  </div>
</template>

<script>
import "pathseg";
import Matter from "matter-js";
import startGyroScope from './utils/startGyroscope.js'
import { onMounted, ref, computed, useContext } from '@nuxtjs/composition-api'

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
    const gyrascopeX = ref(1)
    const gyrascopeY = ref(1)
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
      const el = document.getElementById('footer-matter')
      var canvas = document.getElementById('wrap-footer')
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
      world.gravity.y = 2.5;
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
      canvas.style.width = container.offsetWidth + 'px'
      canvas.width = container.offsetWidth * window.devicePixelRatio;
      canvas.height = container.offsetHeight * window.devicePixelRatio;



      Render.run(render);

      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      const sprites = [
        {
          path: 'Group 7.png',
        },
        {
          path: 'path64.png',
        },
        {
          path: 'path62.png',
        },
        {
          path: 'path12.png',
        }
      ]
      let maxSize = null
      if (container.offsetWidth >= 768) {
          maxSize = 5800
        }
      else {
        maxSize = 3700
      }
      let scaleParams = container.offsetWidth
      let procent = scaleParams / maxSize
      
      const addBodies = () => {
        var ground = Bodies.rectangle(canvas.clientWidth / 2, canvas.clientHeight + 30, canvas.clientWidth, 60, {
          isStatic: true, label: "Ground", density: 1.4, render: {
            fillStyle: 'white'
          }
        });
        var roof = Bodies.rectangle(canvas.clientWidth / 2, 0 - 60, canvas.clientWidth, 60, {
          isStatic: true, label: "Roof", density: 1.4,
        });
        var wallLeft = Bodies.rectangle(-30, canvas.clientHeight / 2, 60, canvas.clientHeight * 3, {
          isStatic: true, label: "Wall Left", density: 1.4,
        });
        var wallRight = Bodies.rectangle(canvas.clientWidth + 30, canvas.clientHeight / 2, 60, canvas.clientHeight * 3, {
          isStatic: true, label: "Wall Right", density: 1.4,
        });
        Matter.Composite.add(engine.world, [
          ground, wallLeft, wallRight, roof
        ])
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
        if (window.location.pathname === '/') {
          if (container.offsetWidth >= 768) {
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
          } else {
            return 
          }
        } else {
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
            x: (canvas.clientWidth / 2 - (bounceWidth * 2)) + index * 100,
            y: canvas.clientHeight - 150,
            width: null
          }
          if (container.offsetWidth >= 768) {
            bounceWidth = canvas.clientWidth/11
            }
          else {
            bounceWidth = canvas.clientWidth/7.5
          }
          var bounce = Bodies.circle(optBounce.x, optBounce.y, bounceWidth, {
            label: `bounce_${index}`,
            density: 4,
            mass: 10,
            // force: { x: 3, y: 3 },
            restitution: .5,
            inverseMass: 1/10,
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
          Matter.Body.setVelocity(bounce, { x: 0, y: 5 })
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
      startGyroScope(world)
      
      canvas.addEventListener("wheel", (e) => {
      })
    }
    
    return {
      centerOptions,
      gyrascopeX,
      gyrascopeY
    }
  }
};
</script>

<style lang="scss" scoped>
#footer-matter {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #929292;
  min-height: 100%;
  line-height: 0;
  width: 100%;
  .gyro {
    display: flex;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.3;
    p {
      margin: 1rem 1rem;
      line-height: 1.3;
      &:first-child {
        margin-top: 5rem;
      }
    }
  }
}
.ruquestGyro {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 10rem;
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  button {
    padding: 1rem;
  }
}
#footer-matter p {
  position: absolute;
}


svg {
  display: none;
}

* {
  padding: 0;
  margin: 0;
}
</style>
  