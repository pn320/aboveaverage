import dynamic from "next/dynamic";
import type p5Types from "p5";
import React from "react";
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

// eslint-disable-next-line no-var
var radius;
let numLines = 0;

export const HeroAnimation: React.FC<Record<string, unknown>> = ({}) => {
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    numLines = 0;
    p5.createCanvas(0.95 * window.innerWidth, 0.95 * window.innerHeight).parent(
      canvasParentRef
    );
    p5.stroke(0, 0, 0, 15);
  };

  const draw = (p5: p5Types) => {
    radius = (0.9 * Math.min(window.innerWidth, window.innerHeight)) / 2;
    const angle1 = Math.random() * (2 * Math.PI);
    const xpos1 = window.innerWidth / 2 + radius * Math.cos(angle1);
    const ypos1 = window.innerHeight / 2 + radius * Math.sin(angle1);

    const angle2 = Math.random() * (2 * Math.PI);
    const xpos2 = window.innerWidth / 2 + radius * Math.cos(angle2);
    const ypos2 = window.innerHeight / 2 + radius * Math.sin(angle2);

    p5.line(xpos1, ypos1, xpos2, ypos2);
    numLines += 1;
    if (numLines >= 3000) {
      p5.setup();
    }
  };

  const windowResize = (p5: p5Types) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
    radius = (0.9 * Math.min(window.innerWidth, window.innerHeight)) / 2;
  };

  return (
    <Sketch
      className={"absolute left-0 top-0"}
      setup={setup}
      draw={draw}
      windowResized={windowResize}
    />
  );
};
