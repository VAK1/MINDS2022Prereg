import React from "react";
import { animated, interpolate } from "react-spring";

class VisionCard extends React.Component {
  render() {
    const { i, x, y, rot, scale, trans, cards, bind, objs } = this.props;
    const { text } = objs[i];

    return (
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          )
        }}
      >
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans)
          }}
        >
          <div className="card">

            <h2>{text}</h2>
          </div>
        </animated.div>
      </animated.div>
    );
  }
}

export default VisionCard;
