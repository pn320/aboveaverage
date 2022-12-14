import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative z-[2] grid min-h-screen animate-fadein place-content-center">
      <div className="text-center font-sans text-lg font-light md:text-xl lg:text-2xl">
        <span className="text-7xl font-normal tracking-tight md:text-8xl lg:text-9xl ">
          <span className="text-red-900">Hi</span>.
        </span>{" "}
        <br /> I love learning, pretty much{" "}
        <span className="italic">everything</span>
        <motion.span
          className="block text-sm text-gray-700 sm:mt-3 md:text-lg lg:mt-4 lg:text-xl"
          animate={{
            opacity: [0, 1],
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          Press <kbd className="font-sans font-medium text-red-900">⌘</kbd>
          <kbd className="font-sans font-medium text-red-900">K</kbd> to move
          around quick
        </motion.span>
      </div>
    </div>
  );
};
