import { useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type mouseEffectProp = {
  usedAt: "image" | "text";
};

// Hook: track mouse and touch movement
export const useMouseEffect = ({ usedAt }: mouseEffectProp) => {
  //protects from sercer side rendering
  const isClient = typeof window !== "undefined";
  const innerHeight = isClient ? window.innerHeight : 1;
  const innerWidth = isClient ? window.innerWidth : 1;

  const settings = {
    image: {
      translateRange: 25,
      proximityThreshold: 0,
      proximityTarget: null,
    },
    text: {
      translateRange: 5,
      proximityThreshold: 100,
      proximityTarget: { x: innerWidth / 2, y: innerHeight / 2 }, // Example center of screen, you can adjust as needed
    },
  }[usedAt];

  const mouseX = useMotionValue(innerWidth / 2);
  const mouseY = useMotionValue(innerHeight / 2);

  //for softer effect:
  const translateX = useSpring(
    useTransform(
      mouseX,
      [0, innerWidth],
      [-settings.translateRange, settings.translateRange]
    ),
    { stiffness: 40, damping: 15 }
  );
  const translateY = useSpring(
    useTransform(
      mouseY,
      [0, innerHeight],
      [-settings.translateRange, settings.translateRange]
    ),
    { stiffness: 40, damping: 15 }
  );

  const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (settings.proximityTarget) {
        const distance = Math.sqrt(
          Math.pow(e.clientX - settings.proximityTarget.x, 2) +
            Math.pow(e.clientY - settings.proximityTarget.y, 2)
        );
        setIsClose(distance < settings.proximityThreshold);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        mouseX.set(touchX);
        mouseY.set(touchY);

        if (settings.proximityTarget) {
          const distance = Math.sqrt(
            Math.pow(touchX - settings.proximityTarget.x, 2) +
              Math.pow(touchY - settings.proximityTarget.y, 2)
          );
          setIsClose(distance < settings.proximityThreshold);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [
    mouseX,
    mouseY,
    settings.proximityTarget,
    settings.proximityThreshold,
    isClient,
  ]);

  return { translateX, translateY, isClose };
};
