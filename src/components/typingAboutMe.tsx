import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TypingGreeting() {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const greetings = ['Hello!', 'Halo!', 'Hola!', 'Hallo!', 'Bonjour!', 'Ciao!', 'Konnichiwa!', 'Nihǎo!', '안녕하세요!', 'مرحبا!'];

    useEffect(() => {
        const currentGreeting = greetings[currentIndex];
        let charIndex = isDeleting ? currentGreeting.length : 0;

        const startDelay = setTimeout(() => {
            const timer = setInterval(() => {
                if (!isDeleting) {
                    // Typing
                    if (charIndex <= currentGreeting.length) {
                        setDisplayedText(currentGreeting.slice(0, charIndex));
                        charIndex++;
                    } else {
                        clearInterval(timer);
                        // Pause sebelum mulai delete
                        setTimeout(() => setIsDeleting(true), 1800);
                    }
                } else {
                    // Deleting
                    if (charIndex >= 0) {
                        setDisplayedText(currentGreeting.slice(0, charIndex));
                        charIndex--;
                    } else {
                        clearInterval(timer);
                        setIsDeleting(false);
                        // Pindah ke greeting berikutnya
                        setCurrentIndex((prev) => (prev + 1) % greetings.length);
                    }
                }
            }, isDeleting ? 120 : 180); // Delete lebih cepat dari typing

            return () => clearInterval(timer);
        }, currentIndex === 0 && !isDeleting ? 1900 : 1000);

        return () => clearTimeout(startDelay);
    }, [currentIndex, isDeleting]);

    return (
        <div className="absolute items-center justify-center min-h-screen">
            <div className="text-center">
                <motion.p
                    className="text-lg md:text-lg text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {displayedText}
                    <motion.span
                        className="inline-block w-0.5 h-5 bg-gray-700 ml-1"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                    >
                        |
                    </motion.span>
                </motion.p>
            </div>
        </div>
    );
}