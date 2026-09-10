import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@iconify/react";

const steps = [
  {
    number: "01",
    title: "Choose Your Path",
    description:
      "Select the skills you want to master and build a learning journey around your goals.",
    label: "CHOOSE PATH",
  },
  {
    number: "02",
    title: "Complete Quests",
    description:
      "Take on interactive challenges, build projects, and gain experience as you progress.",
    label: "COMPLETE QUESTS",
  },
  {
    number: "03",
    title: "Level Up",
    description:
      "Track your progress, unlock achievements, and build a profile that reflects your skills.",
    label: "LEVEL UP",
  },
];

function HowItWorks() {
  const [addCardEffect, setCardEffect] = useState(false);
  const [addButtonEffect, setButtonEffect] = useState(null);
  const [addArrow, setArrow] = useState(false);

  return (
    <section id="how-it-works" className="relative px-6 py-32">
      <div className="flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl font-[Sora] font-extrabold tracking-tight sm:text-4xl md:text-5xl"
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          viewport={{ once: true }}
        >
          How It{" "}
          <span className="bg-gradient-to-r from-[#c084fc] to-[#22d3ee] bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-[#9ca3af]"
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          viewport={{ once: true }}
        >
          Choose your path, complete challenges, and level up your development
          skills through an interactive learning journey.
        </motion.p>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{
              opacity: 0,
              y: 50,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scaleY: addCardEffect ? 1.01 : 1,
              scaleZ: addCardEffect ? 1.01 : 1,
              boxShadow: addCardEffect
                ? "0 20px 40px rgba(139, 92, 246, 0.3)"
                : "none",
              borderColor: addCardEffect
                ? "rgba(34, 211, 238, 0.5)"
                : "rgba(255, 255, 255, 0.1)",
              transition: {
                ease: addCardEffect ? [0.1, 0.4, 0.1, 0.2] : "easeOut",
                duration: 0.3,
              },
            }}
            onMouseEnter={() => setCardEffect(true)}
            onMouseLeave={() => setCardEffect(false)}
            className=" relative min-h-[380px] overflow-hidden rounded-2xl border border-[#ffffff]/10 bg-[#161d2d]/80 p-8 backdrop-blur-sm"
          >
            {index === 0 && (
              <motion.img
                src="../public/images/PathCard.png"
                alt=""
                aria-hidden="true"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 0.5,
                  scale: 4,
                  scaleY: 3,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none
                  absolute
                  right-[-25px]
                  top-[-20px]
                  z-0
                  h-20
                  w-50
                  object-contain
                "
              />
            )}
            {index === 1 && (
              <motion.img
                src="../public/images/QuestsCard.png"
                alt=""
                aria-hidden="true"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 0.89,
                  scale: 3,
                  scaleY: 1.3,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none
                  absolute
                  right-[-20px]
                  top-[25px]
                  z-0
                  h-44
                  w-54
                  object-contain
                "
              />
            )}
            {index === 2 && (
              <motion.img
                src="../public/images/LevelUpCard.png"
                alt=""
                aria-hidden="true"
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1.5,
                  scaleY: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  pointer-events-none
                  absolute
                  right-[15px]
                  top-[50px]
                  z-0
                  h-60
                  w-90
                  object-contain
                "
              />
            )}
            <div className="absolute left-0 top-0 h-[55%] w-[75%] bg-gradient-to-br from-[#a855f7]/10 via-[#22d3ee]/5 to-transparent blur-2xl" />

            <div className="relative z-10 flex h-full flex-col">
              <span className="text-sm font-semibold tracking-[0.25em] text-[#c084fc]">
                {step.number}
              </span>

              <div className="h-28" />

              <h3 className="text-2xl font-[Sora] font-bold text-[#ebebeb]">
                {step.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#9ca3af]">
                {step.description}
              </p>

              <div className="mt-auto pt-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.4 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-px w-full origin-left bg-gradient-to-r from-[#a855f7] via-[#22d3ee]/60 to-transparent"
                />

                <motion.button
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6 + index * 0.15,
                  }}
                  className="mt-5 flex items-center gap-1 bg-gradient-to-r from-[#c084fc] to-[#22d3ee] bg-clip-text text-sm font-bold tracking-[0.18em] text-transparent"
                  onMouseEnter={() => {
                    setArrow(true);
                    setButtonEffect(index);
                  }}
                  onMouseLeave={() => {
                    setArrow(false);
                    setButtonEffect(null);
                  }}
                >
                  {step.label}

                  {addArrow && addButtonEffect === index && (
                    <Icon
                      icon="mdi:arrow-right"
                      className="text-[#c084fc]"
                      width={25}
                      height={20}
                    />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
