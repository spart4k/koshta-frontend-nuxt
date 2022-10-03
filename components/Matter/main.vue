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
      setTimeout(() => {
        initMatter()
      }, 300)
      
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
      let scaleParams = container.offsetWidth
      let procent = scaleParams/maxSize
      let bounes = []
      sprites.forEach((item, index) => {
        const getImage = (path) => {
          return require(`@/assets/images/${path}`)
        }
        var bounce = Bodies.circle(canvas.width/2, -300 - index * 900,canvas.width/12.5, {
          label: `bounce_${index}`,
          density: .8,
          restitution: .8,
          render: {
              sprite: {
                  // texture: require('@/assets/images/Group 3.png'),
                  texture: getImage(item.path),
                  xScale: procent,
                  yScale: procent
              }
          }}
        )
        bounes.push(bounce)
      })
      var ground = Bodies.rectangle(canvas.width / 2, canvas.height + 30, canvas.width, 60, {
        isStatic: true, label: "Ground", density: 1.4,
      });
      var wallLeft = Bodies.rectangle(-30, canvas.height / 2, 60, canvas.height * 3, {
        isStatic: true, label: "Wall Left", density: 1.4,
      });
      var wallRight = Bodies.rectangle(canvas.width + 30, canvas.height / 2, 60, canvas.height * 3, {
        isStatic: true, label: "Wall Right", density: 1.4,
      });
      var textBlock = Bodies.rectangle( canvas.width / 2,canvas.height / 2,props.centerOptions.width, props.centerOptions.height,{
        isStatic: true, label: "Center", density: 1.4, render: {
          fillStyle: 'transparent'
        }
      });
      World.add(world, [
        ground,wallLeft, wallRight, ...bounes
      ]);
      if (container.offsetWidth >= 768) {
        World.add(world, [
          textBlock
        ]);
      }
      
      
      // add mouse control
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
          Matter.Body.setPosition(ground, {x: canvas.width / 2, y: canvas.height + 30})
          Matter.Body.setPosition(wallRight, {x: canvas.width + 30, y: canvas.height / 2})
          Matter.Body.setPosition(textBlock, {x: canvas.width / 2, y: canvas.height / 2})
          // Matter.Body.scale( textBlock, 1.005, 1.005);
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
  height: 100vh;
}
svg {
  display: none;
}
* {
  padding: 0;
  margin: 0;
}
</style>
  