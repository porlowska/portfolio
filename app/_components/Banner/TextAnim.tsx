import { motion, useSpring, useTransform } from "framer-motion";
import { useMouseEffect } from "../../_utils/bannerAnimation";

type textAnimProps = {
  text: React.ReactNode;
  className?: string; //text-6xl md:text-8xl lg:text-[9rem] font-extrabold text-white
  slideDirection: "left" | "right";
};

const TextAnim = ({ text, className, slideDirection }: textAnimProps) => {
  const startX = slideDirection === "right" ? 300 : -300;
  const { translateX, translateY, isClose } = useMouseEffect({
    usedAt: "text",
  });
  const proximityTranslateX = useSpring(
    useTransform(translateX, (x) => (isClose ? startX + 100 : x)),
    { stiffness: 30, damping: 30 } // Slow and smooth transition when moving away
  );

  const proximityTranslateY = useSpring(
    useTransform(translateY, (y) => (isClose ? y + 20 : y)),
    { stiffness: 30, damping: 15 } // Same for vertical smoothness
  );
  return (
    <motion.p
      className={`tracking-wider uppercase leading-none text-nowrap ${className}`}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0.75, x: startX },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 1 }}
      style={{
        x: proximityTranslateX,
        y: proximityTranslateY,
      }}
    >
      {text}
    </motion.p>
  );
};

export default TextAnim;
