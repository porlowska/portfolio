"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMouseEffect } from "../../_utils/bannerAnimation";

const ImageAnim = () => {
  const { translateX, translateY } = useMouseEffect({ usedAt: "image" });

  return (
    <div className="absolute max-w-[300px] md:max-w-[500px] w-full h-auto flex justify-center items-center">
      <motion.div
        className="relative"
        style={{ x: translateX, y: translateY }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <Image
          src="/pic/portrait.jpeg"
          alt="Picture of Polly Orlowska - web developer and designer"
          width={500}
          height={800}
          className="opacity-70"
        />
      </motion.div>
    </div>
  );
};

export default ImageAnim;
