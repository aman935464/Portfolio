import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function HeroLogo() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["CodeWithAman"],
      typeSpeed: 200,
      backSpeed: 300,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <h2 className="text-lg sm:text-xl w-[clamp(2rem,2vw,4rem)] md:text-2xl text-white font-[monolitic]">
      <span ref={typedRef}></span>
    </h2>
  );
}
