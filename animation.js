import Splitting from "splitting";
import "splitting/dist/splitting.css"; // Importer Splitting.js CSS
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const herotitle = document.getElementById("herotitle").querySelector("h1");

  if (herotitle) {
    const result = Splitting({ target: herotitle, by: "chars" });

    const chars = result[0].chars;

    const tl = gsap.timeline();

    tl.to(overlay, {
      duration: 1,
      scaleY: 0,
      transformOrigin: "top",
      ease: "power2.inOut",
    });

    tl.from(
      chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.05,
        duration: 1,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );
  }
});
