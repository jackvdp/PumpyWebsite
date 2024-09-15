import { motion } from 'framer-motion';
import {
    ChatBubbleIcon,
  } from '@radix-ui/react-icons';
  import GradientButton, { SecondaryGradientButton } from '@/components/reusables/GradientButton';
  import ScrollIndicator from '@/components/reusables/ScrollIndicator';

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="relative bg-gradient-to-br from-slate-50 to-indigo-100 min-h-screen flex flex-col justify-between overflow-hidden">
            {['bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-blue-300', 'bg-violet-300'].map((color, index) => (
                <motion.div
                    key={index}
                    className={`absolute w-64 h-64 ${color} rounded-full mix-blend-multiply filter blur-xl opacity-50`}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, index % 2 === 0 ? 50 : -50, 0],
                        y: [0, index % 2 === 0 ? 30 : -30, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15 + index * 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    style={{
                        top: `${(index * 20) % 100}%`,
                        left: `${(index * 25) % 100}%`,
                    }}
                />
            ))}

            {/* Main content */}
            <div className="flex-grow flex items-center pt-16">
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <motion.div
                        className="text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-7xl"
                            variants={itemVariants}
                        >
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                                Crafting Digital Solutions
                            </span>
                            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient">
                                That Work for You
                            </span>
                        </motion.h1>
                        <motion.p
                            className="mt-3 max-w-md text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-slate-700"
                            variants={itemVariants}
                        >
                            We specialize in crafting bespoke websites and apps that perfectly fit your unique needs.
                            Our agile approach ensures swift delivery, coupled with a personalized service at every step,
                            to bring your digital vision to life quickly and effectively.
                        </motion.p>
                        <motion.div
                            className="mt-5 w-full sm:w-auto md:mt-8 flex justify-center lg:justify-start gap-4"
                            variants={itemVariants}
                        >
                            <GradientButton
                                text="Let's Discuss Your Project"
                                Icon={ChatBubbleIcon}
                                href="/contact"
                            />
                            <SecondaryGradientButton
                                text="Our Works"
                                href="/casestudies"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Features aligned to bottom */}
            <div className="w-full py-6">
                <ScrollIndicator />
            </div>

            {/* Background lines animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[200%] aspect-[1/0.7] [mask-image:linear-gradient(to_bottom,white,transparent)]">
                    <div className="flex flex-col items-center">
                        {[...Array(20)].map((_, index) => (
                            <motion.div
                                key={index}
                                className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                                style={{
                                    translateY: index * 12,
                                    scaleY: 0.5,
                                    opacity: 1 - index * 0.05,
                                }}
                                animate={{
                                    translateX: ["-10%", "10%", "-10%"],
                                    scaleY: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 0,
                                    repeat: 0,
                                    ease: "easeInOut",
                                    delay: index * 0.1,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}