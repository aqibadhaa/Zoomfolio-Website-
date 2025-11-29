import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profilePicture from './images/IMG_9225.jpg'

interface FinalRevealProps {
  startOffset: number;
}

export function FinalReveal({ startOffset }: FinalRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const sectionProgress = useTransform(
    scrollY,
    [startOffset, startOffset + 3000],
    [0, 1]
  );

  const photoScale = useTransform(sectionProgress, [0, 0.4, 0.7], [0.5, 0.8, 1]);
  const photoOpacity = useTransform(sectionProgress, [0, 0.3, 0.5], [0, 0.5, 1]);
  const textY = useTransform(sectionProgress, [0, 0.5, 0.8], [150, 50, 0]);
  const textOpacity = useTransform(sectionProgress, [0.2, 0.4, 0.7], [0, 0.5, 1]);

  return (
    <section ref={ref} className="h-[3000px] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50 to-yellow-100">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            style={{ opacity: photoOpacity }}
            className="w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-purple-100/20 to-blue-500/20 rounded-full blur-[100px]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-8">
          {/* Profile Photo */}
          <motion.div
            style={{ scale: photoScale, opacity: photoOpacity }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-50" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-white">
              <ImageWithFallback
                src={profilePicture}  // foto di folder public/images/
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Tagline */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-5xl text-gray-900 tracking-tight">
              Muhammad Tsaqib Adha
            </h1>
            <p className="text-lg md:text-lg text-gray-500 max-w-sm">
              ingin menjadi MLOps hamdal tapi masih sering scroll tiktok
            </p>

            {/* Contact/Social Links */}
            <motion.div
              style={{ opacity: textOpacity }}
              className="flex gap-6 justify-center pt-6"
            >
              <a
                href="https://github.com/aqibadhaa"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors tracking-wide uppercase"
              >
                GitHub
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="www.linkedin.com/in/muhammad-tsaqib-adha-"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors tracking-wide uppercase"
              >
                LinkedIn
              </a>
              <span className="text-gray-300">•</span>
              <a
                href="mailto:tsaqibadha@gmail.com"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors tracking-wide uppercase"
              >
                Email
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom spacing decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 to-transparent" />
      </div>
    </section>
  );
}
