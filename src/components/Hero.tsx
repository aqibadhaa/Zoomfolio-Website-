import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import GreetingTyping from './typingGreeting'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100"
    >
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 100])
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 150])
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Hello Text */}
      <div className="relative z-10 text-center" style={{ marginBottom: 50 }}>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[12rem] md:text-[15rem] tracking-[-0.50em] text-gray-900"
          style={{ fontFamily: "monospace", letterSpacing: -55 }}
        >
          H e l l o.
        </motion.h1>

        <GreetingTyping />
      </div>





      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-gray-500 tracking-widest ">Scrolldown</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
