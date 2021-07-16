import { useSpring, animated } from "react-spring";
import "./funDemo.css";

const trans = (x, y) => `translate(${x}px,${y}px) translate(${x}px,${y}px)`;

function FunDemo() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 200, friction: 100 },
  }));

  const handleMouseMove = (e) => {
    set({
      xy: [
        (e.clientX * 50) / window.innerWidth,
        (e.clientY * 50) / window.innerHeight,
      ],
    });
  };

  return (
    <div class="container" onMouseMove={handleMouseMove}>
      <section class="box">
        <animated.div style={{ transform: props.xy.interpolate(trans) }} />
      </section>
    </div>
  );
}

export default FunDemo;
