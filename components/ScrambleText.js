import React, { useRef, useState } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const ScrambleText = ({ text }) => {
  const [displayed, setDisplayed] = useState(text);
  const intervalRef = useRef(null);

  const handleMouseOver = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplayed((prev) =>
        prev
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseOut = () => {
    clearInterval(intervalRef.current);
    setDisplayed(text);
  };

  return (
    <span
      data-value={text}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ cursor: 'pointer', userSelect: 'none' }}
    >
      {displayed}
    </span>
  );
};

export default ScrambleText; 