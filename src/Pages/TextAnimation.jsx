import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Fullstack Developer",
        "Frontend Developer",
        "React Developer",
        "Backend Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <>
      <span ref={typedRef}></span>
    </>
  );
}