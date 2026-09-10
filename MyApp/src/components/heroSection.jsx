import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

function HeroSection() {
  const [insertButtonContent, setButtonContent] = useState(false);

  return (
    <div className="relative flex flex-col items-center text-center pt-[200px] px-6 ">
      <motion.h1
        initial={{
          opacity: 0,
          y: 35,
          scale: 0.97,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Sora] font-extrabold tracking-[-0.04em] leading-[1.05] text-[Sora]"
      >
        <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-400 bg-clip-text text-transparent font-[Sora]">
          MASTER DEVELOPMENT
        </span>
      </motion.h1>

      <motion.h3
        initial={{
          opacity: 0,
          y: 25,
          filter: "blur(6px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-5 text-xl sm:text-2xl md:text-3xl font-[Sora] font-semibold tracking-tight"
      >
        One Skill at a Time
      </motion.h3>

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-2xl mt-5 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
      >
        Turn your coding journey into an interactive skill tree. Complete
        quests, earn XP, and build a profile that shows exactly what you know.
      </motion.p>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col sm:flex-row gap-4 mt-9"
      >
        <motion.button
          onMouseEnter={() => setButtonContent(true)}
          onMouseLeave={() => setButtonContent(false)}
          whileHover={{
            scale: 1,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
            borderColor: "#22D3EE",
            backgroundColor: "#1A2030",
            transition: { duration: 0.7 },
            y: -1,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="px-7 py-3 rounded-lg
          relative overflow-hidden  font-semibold shadow-sm bg-[#724cc9] shadow-purple-600 backdrop-blur-sm  hover:bg-transparent hover:border-2 border-[#8B5CF6] transition-all duration-100 drop-shadow-[#22D3EE] "
        >
          {insertButtonContent ? (
            <>
              Start Journey{" "}
              <Icon
                icon="solar:arrow-right-bold"
                width="24"
                height="24"
                className="inline ml-[5px]"
              />
            </>
          ) : (
            "Start Journey"
          )}{" "}
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.04,
            y: -1,
          }}
          whileTap={{ scale: 0.97 }}
          initial={{
            boxShadow: "0px 3px 4px #c084fc",
          }}
          className="px-7 py-3 rounded-lg border bg-white/5 font-semibold backdrop-blur-sm hover:border-[#22D3EE] hover:shadow-sm shadow-[#188ea0]"
        >
          Explore More
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HeroSection;
