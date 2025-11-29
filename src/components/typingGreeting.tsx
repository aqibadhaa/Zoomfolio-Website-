import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TypingGreeting() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Welcome to my Zoomfolio website';

    useEffect(() => {
        let index = 0;

        // Delay sebelum mulai ngetik (dalam milidetik)
        const startDelay = setTimeout(() => {
            const timer = setInterval(() => {
                if (index <= fullText.length) {
                    setDisplayedText(fullText.slice(0, index));
                    index++;
                } else {
                    clearInterval(timer);
                }
            }, 80);

            return () => clearInterval(timer);
        }, 1600); // 2000ms = 2 detik delay sebelum mulai

        return () => clearTimeout(startDelay);
    }, []);


    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
                <motion.p
                    className="text-lg md:text-xl text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 5 }}
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