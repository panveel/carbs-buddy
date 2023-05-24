// import React, { forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import React from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { theme } from './Theme';

const { useEffect, useRef, useImperativeHandle, forwardRef } = React;


const Monitor = styled.div`
.circle {
  position: fixed;
  transform: translate(50%, 50%);
  top: 20px;
  left: 0;
  opacity: 0.3;
  background-color: ${theme.primaryColor};
  z-index: 20;
  border-radius: 50%;
}

.circle.sm {
  width: 30px;
  height: 30px;
}

.circle.md {
  width: 60px;
  height: 60px;
}

.circle.lg {
  width: 90px;
  height: 90px;
}
`;

const Circle = forwardRef(({ size, delay }, ref) => {
  const el = useRef();

  useImperativeHandle(
    ref,
    () => {
      // return our API
      return {
        moveTo(x, y) {
          gsap.to(el.current, { x, y, delay });
        },
      };
    },
    [delay]
  );

  return <div className={`circle ${size}`} ref={el}></div>;
});

function MouseMonitor() {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    circleRefs.current.forEach((ref) =>
      ref.moveTo(innerWidth / 2, innerHeight / 2)
    );

    const onMove = ({ clientX, clientY }) => {
      circleRefs.current.forEach((ref) => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <Monitor>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      <Circle size="md" ref={addCircleRef} delay={0.1} />
      <Circle size="lg" ref={addCircleRef} delay={0.2} />
    </Monitor>
  );
}

export default MouseMonitor;
