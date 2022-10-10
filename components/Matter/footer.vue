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
          wireframes: false
        }
      });
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;



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
          path: 'path24.png',
        }
      ]
      const maxSize = 3200
      let scaleParams = container.offsetWidth
      let procent = scaleParams / maxSize
      let bounes = []
      sprites.forEach((item, index) => {
        const getImage = (path) => {
          return require(`@/assets/images/${path}`)
        }
        var bounce = Bodies.circle((canvas.width / 2 - (canvas.width / 12.5 * 2)) + index * 100, canvas.height - 150, canvas.width / 12.5, {
          label: `Bounce`,
          density: .8,
          restitution: .8,
          render: {
            sprite: {
              // texture: require('@/assets/images/Group 3.png'),
              texture: getImage(item.path),
              xScale: procent,
              yScale: procent
            }
          }
        }
        )
        bounes.push(bounce)
      })
      var ground = Bodies.rectangle(canvas.width / 2, canvas.height + 30, canvas.width, 60, {
        isStatic: true, label: "Ground", density: 1.4,
      });
      var roof = Bodies.rectangle(canvas.width / 2, 0 - 60, canvas.width, 60, {
        isStatic: true, label: "Roof", density: 1.4,
      });
      var wallLeft = Bodies.rectangle(-30, canvas.height / 2, 60, canvas.height * 3, {
        isStatic: true, label: "Wall Left", density: 1.4,
      });
      var wallRight = Bodies.rectangle(canvas.width + 30, canvas.height / 2, 60, canvas.height * 3, {
        isStatic: true, label: "Wall Right", density: 1.4,
      });
      World.add(world, [
        ground, wallLeft, roof, wallRight, ...bounes
      ]);
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
      Events.on(mouseConstraint, "startdrag", () => {
        store.commit('matter/changeState', true)
      })
      Events.on(mouseConstraint, "enddrag", () => {
        store.commit('matter/changeState', false)
      })
      // keep the mouse in sync with rendering
      render.mouse = mouse;

      window.addEventListener("resize", function () {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight
        Matter.Body.setPosition(ground, { x: canvas.width / 2, y: canvas.height + 30 })
        Matter.Body.setPosition(wallRight, { x: canvas.width + 30, y: canvas.height / 2 })
        // Matter.Body.scale( textBlock, 1.005, 1.005);
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
        console.log('move')
        e.stopPropagation()
      })
      container.addEventListener('swiped', e => {
        console.log('swiped')
        alert('swiped-up')
        e.stopPropagation()
      })
      document.addEventListener('swiped-up', function(e) {
        alert('swiped-up')
        console.log('swiped-up'); // the element that was swiped
        e.stopPropagation()
    });
      // setTimeout(() => {
      //   shakeBodies()
      // }, 3000)
    }
    return {
      centerOptions
    }
  }
};
</script>

<style>
#footer-matter {
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
  