import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";

export function CustomCursor() {
  const isMobile = useIsMobile();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (isMobile) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, cursorX, cursorY, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] mix-blend-difference"
        style={{ x: springX, y: springY }}
        animate={{
          scale: isHovering ? 1 : 0.5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          {isHovering ? (
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-nexus-green/60">
              <span className="font-mono text-[8px] tracking-widest text-nexus-green uppercase">
                View
              </span>
            </div>
          ) : (
            <div className="h-3 w-3 rounded-full bg-nexus-cream" />
          )}
        </div>
      </motion.div>
    </>
  );
}
