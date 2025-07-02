import React, { useRef, useState } from "react";
import "./WoodenButton.css";

const WoodenButton = () => {
  const [state, setState] = useState("settled"); // 'settled', 'hover', 'dropping', 'bouncing'
  const [ignore, setIgnore] = useState(false);
  const btnRef = useRef(null);

  // Play knock sound and animate bounce
  const handleClick = () => {
    if (ignore) return;
    setIgnore(true);
    setState("bouncing");
    const audio = new Audio(process.env.PUBLIC_URL + "/knock.mp3");
    audio.play();
    setTimeout(() => {
      setState("hover");
      setIgnore(false);
    }, 500); // bounce duration
  };

  // On hover, float and align
  const handleMouseEnter = () => {
    if (ignore) return;
    setState("hover");
  };

  // On leave, thud and settle off-kilter
  const handleMouseLeave = () => {
    if (ignore) return;
    setState("dropping");
    setTimeout(() => setState("settled"), 700); // drop duration
  };

  return (
    <button
      ref={btnRef}
      className={`wooden-btn ${state}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={ignore}
      tabIndex={0}
    >
      <span className="burnt-text">Buy Now</span>
    </button>
  );
};

export default WoodenButton;