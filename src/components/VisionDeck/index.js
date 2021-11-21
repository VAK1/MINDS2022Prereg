import React, { useState, useEffect } from "react";
import { useSprings } from "react-spring";
import { useGesture } from "react-with-gesture";
import VisionCard from "../VisionCard";

import "./Deck.css";

const cards = [1, 2, 3];

const objs = [
  {
    text: "To cultivate a collaborative community of driven scholars"
  },
  {
    text:
      "To foster industry level education"
  },
  {
    text: "To encourage real-world application and evaluation"
  }
];

const to = i => ({
  x: 0,
  y: i * -10,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100
});
const from = i => ({ rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(100000px) rotateX(0deg) rotateY(${0
    }deg) rotateZ(${r}deg) scale(${s})`;

function SwipeAuto() {
  
}

function VisionDeck() {
  const [gone] = useState(() => new Set());

  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  const SwipeAuto = (argus) => {
    const {
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    } = argus;

    const trigger = velocity > 0.2;

    const dir = xDir < 0 ? -1 : 1;

    if (!down && trigger) gone.add(index);

    set(i => {
      if (index !== i) return;
      const isGone = gone.has(index);

      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;

      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

      const scale = down ? 1.1 : 1;
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
      };
    });

    if (!down && gone.size === cards.length)
      setTimeout(() => gone.clear() || set(i => to(i)), 600);
  }
  

  useEffect(() => {
    
    const interval = setInterval(() => {
      const argus = {
        args: [cards.length - gone.size-1],
        down: 0,
        delta: [10],
        distance: 3,
        direction: [0.5-gone.size%2],
        velocity: 0.5
      };
      SwipeAuto(argus);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity
    }) => {
      const trigger = velocity > 0.2;

      const dir = 2*(0.5-index%2)

      set(i => {
        if (index !== i) return;
        const isGone = gone.has(index);

        const x = isGone ? (200 + window.innerWidth) * dir : 0;

        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);

        const scale = down ? 1.1 : 1;
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
        };
      });

      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600);
    }
  );

  return props.map(({ x, y, rot, scale }, i) => (
    <VisionCard
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      cards={cards}
      objs={objs}
      bind={bind}
      class = "visionCard"
    />
  ));
}

export default VisionDeck;
