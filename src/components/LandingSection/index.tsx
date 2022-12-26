import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const LandingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="relative z-[2] flex h-screen justify-center text-center">
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-80px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s ease 0.1s",
        }}
        className="font-sans font-light tracking-tight sm:w-2/4 sm:pl-0 sm:mx-2 sm:-mt-12 lg:mx-0 lg:mt-4 sm:text-lg md:w-3/5 lg:pl-1 lg:text-xl"
      >
        I&apos;m Prakhar Nagpal. I&apos;m a final year Computing student at
        Imperial College London. I interned as a{" "}
        <span className="font-normal text-red-900 underline">
          <a href="https://www.five.ai/" target={"_blank"} rel="noreferrer">
            SWE at FiveAI
          </a>
        </span>{" "}
        this summer. I have interests in{" "}
        <span className="font-normal text-red-900">
          compilers development, machine learning, algorithms, operating systems
        </span>
        , a little bit of{" "}
        <span className="font-normal text-red-900">web development.</span> I
        also play <span className="font-normal text-red-900">badminton</span> in
        my free time,{" "}
        <span className="font-normal text-red-900">write this blog</span> (check
        that out!) and cook as many delicious recipes as I can from{" "}
        <span className="font-normal text-red-900 underline underline-offset-1">
          <a
            href="http://www.kenjilopezalt.com/books"
            target={"_blank"}
            rel="noreferrer"
          >
            The Food Lab!
          </a>
        </span>
        <br />
        <br />
        <div>
          If you have an interesting project in mind, shoot me an{" "}
          <span className="font-normal text-red-900 underline underline-offset-1">
            <a
              href="mailto:prakhar.nagpal03@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              email
            </a>
            !
          </span>
        </div>
      </motion.div>
    </div>
  );
};
