import React, { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const increment = Math.ceil(end / 60);

          const interval = setInterval(() => {
            current += increment;
            if (current >= end) {
              current = end;
              clearInterval(interval);
            }
            setValue(current);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export default Counter;

