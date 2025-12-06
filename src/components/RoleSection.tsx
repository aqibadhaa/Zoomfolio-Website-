import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface RoleSectionProps {
  title: string;
  startOffset: number;
  endOffset: number;
  backgroundType: "abstract" | "ml" | "mobile";
}

export function RoleSection({ title, startOffset, endOffset, backgroundType }: RoleSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Calculate progress through this section
  const sectionProgress = useTransform(
    scrollY,
    [startOffset, endOffset],
    [0, 1]
  );

  // Text scale: starts at 1 and grows dramatically to 40 (so letters fill the screen)
  // Using smoother easing curve for butter-smooth experience
  const textScale = useTransform(
    sectionProgress,
    [0, 0.0125, 0.025, 0.0375, 0.05, 0.0625, 0.075, 0.0875, 0.10, 0.1125, 0.125, 0.1375, 0.15, 0.1625, 0.175, 0.1875, 0.20, 0.2125, 0.225, 0.2375, 0.25, 0.2625, 0.275, 0.2875, 0.30, 0.3125, 0.325, 0.3375, 0.35, 0.3625, 0.375, 0.3875, 0.40, 0.4125, 0.425, 0.4375, 0.45, 0.4625, 0.475, 0.4875, 0.50, 0.5125, 0.525, 0.5375, 0.55, 0.5625, 0.575, 0.5875, 0.60, 0.6125, 0.625, 0.6375, 0.65, 0.6625, 0.675, 0.6875, 0.70, 0.7125, 0.725, 0.7375, 0.75, 0.7625, 0.775, 0.7875, 0.80, 0.8125, 0.825, 0.8375, 0.85, 0.8625, 0.875, 0.8875, 0.90, 0.9125, 0.925, 0.9375, 0.95, 0.9625, 0.975, 0.9875, 0.999, 1],
    [1, 1.05, 1.1, 1.15, 1.2, 1.27, 1.35, 1.42, 1.5, 1.6, 1.7, 1.85, 2, 2.12, 2.25, 2.37, 2.5, 2.65, 2.8, 3.15, 3.5, 3.75, 4, 4.5, 5, 5.35, 5.7, 6.1, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11, 11.5, 12, 12.5, 13.5, 14, 14.5, 15, 16, 16.5, 17, 17.5, 18.5, 19, 19.5, 20, 21, 21.5, 22, 22.5, 23.5, 24, 24.5, 25, 26, 26.5, 27, 27.5, 28.5, 29, 29.5, 30, 31, 31.5, 32, 32.5, 33.5, 34.5, 35.5, 36.5, 37.5, 38.5, 44.5, 48.5, 54, 68]
  );

  // Text opacity: fades in, stays visible during zoom, then fades out
  const textOpacity = useTransform(
    sectionProgress,
    [0, 0.0125, 0.025, 0.0375, 0.05, 0.0625, 0.075, 0.0875, 0.10, 0.1125, 0.125, 0.1375, 0.15, 0.1625, 0.175, 0.1875, 0.20, 0.2125, 0.225, 0.2375, 0.25, 0.2625, 0.275, 0.2875, 0.30, 0.3125, 0.325, 0.3375, 0.35, 0.3625, 0.375, 0.3875, 0.40, 0.4125, 0.425, 0.4375, 0.45, 0.4625, 0.475, 0.4875, 0.50, 0.5125, 0.525, 0.5375, 0.55, 0.5625, 0.575, 0.5875, 0.60, 0.6125, 0.625, 0.6375, 0.65, 0.6625, 0.675, 0.6875, 0.70, 0.7125, 0.725, 0.7375, 0.75, 0.7625, 0.775, 0.7875, 0.80, 0.8125, 0.825, 0.8375, 0.85, 0.8625, 0.875, 0.8875, 0.90, 0.9125, 0.925, 0.9375, 0.95, 0.9625, 0.975, 0.9875, 1],
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.85, 0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.98, 0.95, 0.92, 0.88, 0.84, 0.8, 0.75, 0.7, 0.65, 0.6, 0.50, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20, 0.20]
  );

  // Background elements move slower (parallax effect) with extended range
  const bgY = useTransform(
    sectionProgress,
    [0, 0.0323, 0.0645, 0.0968, 0.129, 0.161, 0.194, 0.226, 0.258, 0.290, 0.323, 0.355, 0.387, 0.419, 0.452, 0.484, 0.516, 0.548, 0.581, 0.613, 0.645, 0.677, 0.710, 0.742, 0.774, 0.806, 0.839, 0.871, 0.903, 0.935, 0.968, 1],
    [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630, 660, 690, 720, 750, 800]
  );
  const bgOpacity = useTransform(sectionProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const bgYreverse = useTransform(
    sectionProgress,
    [0, 0.0323, 0.0645, 0.0968, 0.129, 0.161, 0.194, 0.226, 0.258, 0.290, 0.323, 0.355, 0.387, 0.419, 0.452, 0.484, 0.516, 0.548, 0.581, 0.613, 0.645, 0.677, 0.710, 0.742, 0.774, 0.806, 0.839, 0.871, 0.903, 0.935, 0.968, 1],
    [800, 750, 720, 690, 660, 630, 600, 570, 540, 510, 480, 450, 420, 390, 360, 330, 300, 270, 240, 210, 180, 150, 120, 90, 60, 30, 0, -30, -60, -90, -120, -150]
  );

  return (
    <section ref={ref} className="h-[8000px] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-gray-50 to-white">


        {/* Background elements based on type */}
        <motion.div
          style={{ y: bgY, opacity: bgOpacity }}
          className="absolute inset-0 z-10">

          {backgroundType === "abstract" && (
            <>
              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '0%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#efe7a0b9',
                  borderRadius: 12
                }}>

              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '40%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#efe7a0b9',
                  borderRadius: 12
                }}>

              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '80%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#efe7a0b9',
                  borderRadius: 12
                }}>

              </div>



            </>
          )}

          {backgroundType === "ml" && (
            <>
              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '0%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#daac92aa',
                  borderRadius: 12
                }}>

              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '40%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#daac92aa',
                  borderRadius: 12
                }}>

              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '80%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#daac92aa',
                  borderRadius: 12
                }}>

              </div>

            </>
          )}

          {backgroundType === "mobile" && (
            <>
              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '0%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#adcfb0bf',
                  borderRadius: 12
                }}>

              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '40%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#adcfb0bf',
                  borderRadius: 12
                }}>

              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '-183%',
                  left: '80%',
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#adcfb0bf',
                  borderRadius: 12
                }}>

              </div>
            </>
          )}
        </motion.div>

        <motion.div style={{ y: bgYreverse, opacity: bgOpacity }}
          className="absolute inset-0 z-10">

          {backgroundType === "abstract" && (
            <>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-95%', // ganti top jadi bottom
                  left: '20%',    // ganti left jadi right (opsional, tergantung mau posisi dimana)
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#eca9cb94',
                  borderRadius: 12
                }}>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-95%', // ganti top jadi bottom
                  left: '60%',    // ganti left jadi right (opsional, tergantung mau posisi dimana)
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#eca9cb94',
                  borderRadius: 12
                }}>
              </div>
            </>
          )}

          {backgroundType === "ml" && (
            <>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-95%', // ganti top jadi bottom
                  left: '20%',    // ganti left jadi right (opsional, tergantung mau posisi dimana)
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#c0d6e8d3',
                  borderRadius: 12
                }}>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-95%', // ganti top jadi bottom
                  left: '60%',    // ganti left jadi right (opsional, tergantung mau posisi dimana)
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#c0d6e8d3',
                  borderRadius: 12
                }}>
              </div>
            </>
          )}

          {backgroundType === "mobile" && (
            <>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-95%', // ganti top jadi bottom
                  left: '20%',    // ganti left jadi right (opsional, tergantung mau posisi dimana)
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#97b3ae',
                  borderRadius: 12
                }}>
              </div>

              <div
                style={{
                  position: 'absolute',
                  bottom: '-95%', // ganti top jadi bottom
                  left: '60%',    // ganti left jadi right (opsional, tergantung mau posisi dimana)
                  width: '20%',
                  height: 1500,
                  backgroundColor: '#97b3ae',
                  borderRadius: 12
                }}>
              </div>
            </>
          )}


        </motion.div>

        {/* Main Text */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="fixed z-10 text-center px-8 max-w-6xl"
        >
          <h2
            className="text-5xl md:text-7xl text-gray-900 tracking-tight leading-tight whitespace-pre-line drop-shadow-2xl"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '2px 2px 0px rgba(177, 240, 251, 0.58), 4px 4px 0px rgba(204, 185, 250, 0.68), 6px 6px 0px rgba(230, 212, 107, 0.5)'
            }}
          >
            {title}
          </h2>

        </motion.div>
      </div>
    </section>
  );
}