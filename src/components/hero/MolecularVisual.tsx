import { useRef, useMemo } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  angle: number;
}

export function MolecularVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition();

  const particles: Particle[] = useMemo(() => {
    const p: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      p.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
      });
    }
    return p;
  }, []);

  const containerX = useMotionValue(0);
  const containerY = useMotionValue(0);

  const rotateX = useTransform(containerY, [-300, 300], [5, -5]);
  const rotateY = useTransform(containerX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    containerX.set(e.clientX - centerX);
    containerY.set(e.clientY - centerY);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2dd4a0" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#2dd4a0" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#2dd4a0" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle cx="250" cy="250" r="180" fill="url(#coreGlow)" />

          <motion.circle
            cx="250"
            cy="250"
            r="80"
            fill="none"
            stroke="#2dd4a0"
            strokeWidth="0.5"
            opacity="0.3"
            animate={{
              r: [80, 85, 80],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="250"
            cy="250"
            r="120"
            fill="none"
            stroke="#2dd4a0"
            strokeWidth="0.3"
            opacity="0.2"
            animate={{
              r: [120, 125, 120],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <motion.circle
            cx="250"
            cy="250"
            r="160"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="0.2"
            opacity="0.15"
            animate={{
              r: [160, 165, 160],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />

          {particles.map((particle) => {
            const px = (particle.x / 100) * 500;
            const py = (particle.y / 100) * 500;
            const distFromCenter = Math.sqrt(
              Math.pow(px - 250, 2) + Math.pow(py - 250, 2)
            );

            const mouseInfluence = Math.max(0, 1 - distFromCenter / 250);

            return (
              <motion.g key={particle.id}>
                <motion.circle
                  cx={px}
                  cy={py}
                  r={particle.size}
                  fill={particle.size > 2 ? "#2dd4a0" : "#67e8f9"}
                  opacity={particle.opacity}
                  animate={{
                    cx: [
                      px,
                      px + Math.cos(particle.angle) * 10 * mouseInfluence,
                      px,
                    ],
                    cy: [
                      py,
                      py + Math.sin(particle.angle) * 10 * mouseInfluence,
                      py,
                    ],
                    opacity: [
                      particle.opacity,
                      particle.opacity * 1.5,
                      particle.opacity,
                    ],
                  }}
                  transition={{
                    duration: 3 + particle.speed * 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {distFromCenter < 200 && (
                  <motion.line
                    x1={px}
                    y1={py}
                    x2={250}
                    y2={250}
                    stroke="#2dd4a0"
                    strokeWidth="0.2"
                    opacity={0.1 * mouseInfluence}
                    animate={{
                      opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                      duration: 2 + particle.speed * 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.g>
            );
          })}

          <motion.circle
            cx="250"
            cy="250"
            r="6"
            fill="#2dd4a0"
            filter="url(#glow)"
            animate={{
              r: [6, 8, 6],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 250 + Math.cos(rad) * 80;
            const y = 250 + Math.sin(rad) * 80;
            return (
              <motion.circle
                key={i}
                cx={x}
                cy={y}
                r="3"
                fill="#67e8f9"
                opacity="0.6"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <motion.div
              className="h-32 w-32 rounded-full bg-gradient-to-br from-nexus-green/20 to-nexus-cyan/10 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="h-24 w-24 rounded-full border border-nexus-green/20" />
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="h-16 w-16 rounded-full border border-nexus-cyan/15" />
            </motion.div>
          </div>
        </div>

        <div className="absolute top-10 left-10 font-mono text-[10px] text-nexus-sage/50">
          <div>MOL-001</div>
          <div>λ: 488nm</div>
        </div>

        <div className="absolute bottom-10 right-10 font-mono text-[10px] text-nexus-sage/50 text-right">
          <div>RES: 0.2nm</div>
          <div>T: 295K</div>
        </div>

        <motion.div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nexus-green/20 to-transparent"
          animate={{
            y: [-200, 200],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
