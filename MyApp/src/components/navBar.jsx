import { useState } from "react";
import { motion } from "framer-motion";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex px-4 sm:px-6 md:px-10 py-5 fixed shadow-lg shadow-blue-950 w-full justify-between text-lg bg-[linear-gradient(135deg,#252D3F_0%,#1d2535_50%,#131826_100%)] text-[#ebebeb] font-[intel] h-[90px] z-50">
        <div>
          <img
            className="w-12/12 mt-0 h-14"
            alt="Logo"
            src="./images/SLogo.png"
          />
        </div>

        <div className="hidden lg:flex lg:items-center">
          <a href="#" target="_blank" id="navbar-link" className="mr-8">
            How it works
          </a>
          <a href="#" target="_blank" className="mr-8" id="navbar-link">
            Skills
          </a>
          <a href="" target="_blank" className="mr-8" id="navbar-link">
            Login
          </a>
          <motion.button
            className="
              cursor-pointer
              rounded-lg
              px-4 py-2
              font-semibold
              text-[#EBEBEB]
              bg-[#131826]
              border border-[#8B5CF6]
              shadow-[0_0_7px_rgba(139,92,246,0.25)]
              transition-all duration-300
              hover:bg-[#1A2030]
              hover:border-[#22D3EE]
              hover:shadow-[0_0_7px_rgba(34,211,238,0.35)]
               max-w-[200px]
            "
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
              borderColor: "#22D3EE",
              backgroundColor: "#1A2030",
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </motion.button>
        </div>

        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex flex-col gap-1 p-1.5 rounded-lg hover:bg-[#1A2030] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#EBEBEB] transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#EBEBEB] transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#EBEBEB] transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`
          absolute top-[70px] left-0 w-full
          bg-[linear-gradient(135deg,#252D3F_0%,#1d2535_50%,#131826_100%)]
          shadow-lg shadow-blue-950
          lg:hidden
          transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 py-8" : "max-h-0 opacity-0 py-0 overflow-hidden"}
        `}
        >
          <div className="flex flex-col items-center gap-6 px-4">
            <a
              href="#"
              target="_blank"
              id="navbar-link"
              className="text-[#EBEBEB] hover:text-[#8B5CF6] transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
            <a
              href="#"
              target="_blank"
              className="text-[#EBEBEB] hover:text-[#8B5CF6] transition-colors duration-300"
              id="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href=""
              target="_blank"
              className="text-[#EBEBEB] hover:text-[#8B5CF6] transition-colors duration-300"
              id="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
            <motion.button
              className="
              cursor-pointer
              rounded-lg
               py-2 px-4
              font-semibold
              text-[#EBEBEB]
              bg-[#131826]
              border border-[#8B5CF6]
              shadow-[0_0_7px_rgba(139,92,246,0.25)]
              transition-all duration-300
              hover:bg-[#1A2030]
              hover:border-[#22D3EE]
              hover:shadow-[0_0_7px_rgba(34,211,238,0.35)]
               max-w-[200px]
            "
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
                borderColor: "#22D3EE",
                backgroundColor: "#1A2030",
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 },
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
              }}
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
