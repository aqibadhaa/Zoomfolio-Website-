import { useEffect, useRef } from 'react';

interface Square {
    x: number;
    size: number;
    rotation: number;
    speed: number;
    bounceOffset: number;
    squashFactor: number;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    size: number;
}

interface BackgroundImageProps {
    isSticky?: boolean;
    opacity?: number;
}

export function BackgroundImage({ isSticky = false, opacity = 0.3 }: BackgroundImageProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Create rolling squares
        const squareCount = 2;
        const squares: Square[] = [];
        const particles: Particle[] = [];

        for (let i = 0; i < squareCount; i++) {
            const size = Math.random() * 50 + 90;
            squares.push({
                x: Math.random() * canvas.width - 200,
                size: size,
                rotation: 0,
                speed: Math.random() * 1.1 + 1,
                bounceOffset: 0,
                squashFactor: 1,
            });
        }

        // Animation loop
        let animationFrameId: number;
        const animate = () => {
            // Clear with white background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw ground line
            const groundY = canvas.height - 100;
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, groundY);
            ctx.lineTo(canvas.width, groundY);
            ctx.stroke();

            // Update and draw rolling squares
            squares.forEach((square) => {
                // Update position (moving right)
                square.x += square.speed;

                // Calculate rotation based on distance traveled
                const circumference = 4 * square.size;
                square.rotation = (square.x / circumference) * Math.PI * 2;

                // Determine which corner is hitting the ground (0-3 for 4 corners)
                const rotationNormalized = (square.rotation % (Math.PI * 2)) / (Math.PI / 2);
                const cornerPhase = rotationNormalized % 1;

                // Bounce effect: maksimal bounce saat corner nabrak tanah (cornerPhase = 0)
                const bounceIntensity = 15;
                square.bounceOffset = Math.max(0, (1 - cornerPhase * 2) * bounceIntensity);

                // Squash and stretch: kotak gepeng pas nabrak tanah
                const impactZone = cornerPhase < 0.15; // deteksi zona impact
                if (impactZone) {
                    square.squashFactor = 0.95; // gepeng 15%

                    // Spawn particles saat impact keras
                    if (cornerPhase < 0.05 && Math.random() > 0.7) {
                        for (let i = 0; i < 3; i++) {
                            particles.push({
                                x: square.x + (Math.random() - 0.5) * square.size,
                                y: groundY,
                                vx: (Math.random() - 0.5) * 3,
                                vy: -Math.random() * 4 - 2,
                                life: 1,
                                size: Math.random() * 4 + 2,
                            });
                        }
                    }
                } else {
                    // Kembali ke bentuk normal secara smooth
                    square.squashFactor += (1 - square.squashFactor) * 0.2;
                }

                // Reset to left when reaches right edge
                if (square.x - square.size > canvas.width) {
                    square.x = -square.size * 2;
                    square.rotation = 0;
                }

                // Calculate Y position (sitting on the ground) dengan bounce offset
                const squareY = groundY - (square.size / 2) * Math.sqrt(2) - square.bounceOffset;

                // Draw shadow
                ctx.save();
                const shadowWidth = square.size * 1.2;
                const shadowHeight = square.size * 0.3;
                const shadowOpacity = 0.15 * (1 - square.bounceOffset / bounceIntensity);
                ctx.fillStyle = `rgba(0, 0, 0, ${shadowOpacity})`;
                ctx.beginPath();
                ctx.ellipse(
                    square.x,
                    groundY + 5,
                    shadowWidth / 2,
                    shadowHeight / 2,
                    0,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
                ctx.restore();

                // Draw square dengan squash effect
                ctx.save();
                ctx.translate(square.x, squareY);
                ctx.rotate(square.rotation);

                // Apply squash vertically
                ctx.scale(1 / square.squashFactor, square.squashFactor);

                // Draw black square outline
                ctx.strokeStyle = '#000000';
                ctx.lineWidth = 3;
                ctx.strokeRect(-square.size / 2, -square.size / 2, square.size, square.size);

                ctx.restore();
            });

            // Update and draw particles
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];

                // Update particle physics
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.3; // gravity
                p.life -= 0.02;

                // Remove dead particles
                if (p.life <= 0 || p.y > canvas.height) {
                    particles.splice(i, 1);
                    continue;
                }

                // Draw particle
                ctx.save();
                ctx.fillStyle = `rgba(100, 100, 100, ${p.life})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Handle resize
        const handleResize = () => {
            setCanvasSize();
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={isSticky ? "absolute inset-0 w-full h-full" : "fixed inset-0 w-full h-full -z-10"}
            style={{ opacity }}
        />
    );
}
export default BackgroundImage;