import React, { useEffect, useState } from "react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState(undefined);
  useEffect(() => {
    function handleMouseMove(event) {
      const spotlightEl = document.querySelector("#spotlight");
      const { clientX, clientY } = event;
      setMousePosition(event);
      spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(255, 135, 135, 1)
   5px, transparent 25%)`;
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);
  return (
    <div className="w-full h-[100px] mx-auto snap-center" id="footer">
      <div className="w-full h-[100px] mx-auto">
        <div id="spotlight"></div>
      </div>
      Footer
    </div>
  );
};

export default Footer;
