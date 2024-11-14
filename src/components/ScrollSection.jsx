import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      },
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section className="overflow-auto overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative flex h-screen w-[400vw] flex-row"
        >
          <div className="flex h-screen w-screen items-center justify-center bg-red-400">
            <h3 className="text-uppercase text-lg text-black">
              scroll section 1
            </h3>
          </div>
          <div className="flex h-screen w-screen items-center justify-center bg-yellow-400">
            <h3 className="text-uppercase text-lg text-black">
              scroll section 2
            </h3>
          </div>
          <div className="flex h-screen w-screen items-center justify-center bg-emerald-400">
            <h3 className="text-uppercase text-lg text-black">
              scroll section 3
            </h3>
          </div>
          <div className="flex h-screen w-screen items-center justify-center">
            <h3 className="text-uppercase text-lg text-black">
              scroll section 4
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
