import Splitting from "splitting";
import "splitting/dist/splitting.css"; // Importer Splitting.js CSS
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const herotitle = document.getElementById("herotitle").querySelector("h1");

  if (herotitle) {
    const result = Splitting({ target: herotitle, by: "chars" });

    const chars = result[0].chars;

    const tl = gsap.timeline();

    tl.from(
      chars,
      {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.02,
      },
      "<"
    ).to(
      chars,
      {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.02,
      },
      "<1"
    );
  }
});
