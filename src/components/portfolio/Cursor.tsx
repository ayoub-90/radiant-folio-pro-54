import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [variant, setVariant] = useState<"default" | "link">("default");
  const [enabled, setEnabled] = useState(false);

  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.5 });
  const dotX = useSpring(x, { stiffness: 600, damping: 30 });
  const dotY = useSpring(y, { stiffness: 600, damping: 30 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement | null;
      if (t && t.closest('a, button, [data-cursor="link"], input, textarea')) {
        setVariant("link");
      } else {
        setVariant("default");
      }
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: variant === "link" ? "var(--coral)" : "var(--indigo)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border-2"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: variant === "link" ? 44 : 30,
          height: variant === "link" ? 44 : 30,
          borderColor: variant === "link" ? "var(--indigo)" : "var(--coral)",
          opacity: 0.85,
        }}
      />
    </>
  );
}
