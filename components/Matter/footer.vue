<template>
  <div id="footer-matter">
    <canvas id="wrap-footer"></canvas>
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
      default: () => { }
    }
  },
  setup(props, _) {
    const { store } = useContext()
    const centerOptions = computed(() => {
      return props.centerOptions
    })
    onMounted(() => {
      startObserveFooter()
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
      const maxSize = 5000
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
          var bounce = Bodies.circle((canvas.clientWidth / 2 - (canvas.clientWidth / 12.5 * 2)) + index * 100, canvas.clientHeight - 150, canvas.clientWidth/10.5, {
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
        Matter.Composite.clear(engine.world);
        addBounces()
        addBodies()
      });
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
    const startObserveFooter = () => {
      const footer = document.querySelector('.main-footer')
      let options = {
          threshold: 0.9
      }
      const callback = (entries) => {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            store.commit('layout/hideInterface')
          } else {
            store.commit('layout/showInterface')
          }
        });
      }
      let observer = new IntersectionObserver(callback, options);
      observer.observe(footer);
    }
    return {
      centerOptions
    }
  }
};
</script>

<style>
#footer-matter {
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
  