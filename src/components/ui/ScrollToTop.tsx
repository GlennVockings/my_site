"use client"

import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [isTop, setIsTop] = useState(true);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once (on mount)

  return (
    <div className={`stt ${isTop ? 'hidden' : 'fixed'}`}>
      <button onClick={handleClick} className="btn-stt">
        <FaChevronUp />
      </button>
    </div>
  );
};
