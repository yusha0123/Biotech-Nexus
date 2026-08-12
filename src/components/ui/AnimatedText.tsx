import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "words" | "chars" | "lines";
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
  splitBy = "words",
}: AnimatedTextProps) {
  const MotionTag = motion.create(Tag);

  if (splitBy === "lines") {
    const lines = text.split("\n");
    return (
      <MotionTag className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </MotionTag>
    );
  }

  const items = splitBy === "words" ? text.split(" ") : text.split("");

  return (
    <MotionTag className={`${className} flex flex-wrap`}>
      {items.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.03,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {item}
            {splitBy === "words" && i < items.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
