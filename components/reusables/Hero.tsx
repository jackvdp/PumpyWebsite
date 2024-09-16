import { useViewportScroll, useTransform, motion } from 'framer-motion';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import GradientButton, { SecondaryGradientButton } from '@/components/reusables/GradientButton';
import ScrollIndicator from '@/components/reusables/ScrollIndicator';

export default function Hero(): JSX.Element {
    // Parallax effect for background circles
    const { scrollY } = useViewportScroll();
    const yRange = [0, 750];
    const yTransform1 = useTransform(scrollY, yRange, [0, -500]);
    const yTransform2 = useTransform(scrollY, yRange, [0, 500]);

    return (
        <section className="relative bg-gradient-to-br from-slate-50 to-indigo-100 min-h-screen flex flex-col justify-between overflow-hidden">
            {/* Animated Background Circles with Parallax Effect */}
            {['bg-indigo-300', 'bg-purple-300', 'bg-pink-300', 'bg-blue-300', 'bg-violet-300'].map((color, index) => (
                <motion.div
                    key={index}
                    className={`absolute w-64 h-64 ${color} rounded-full mix-blend-multiply filter blur-xl opacity-50`}
                    style={{
                        top: `${(index * 20) % 100}%`,
                        left: `${(index * 25) % 100}%`,
                        y: index % 2 === 0 ? yTransform1 : yTransform2,
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="flex-grow flex items-center pt-16">
                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <motion.div
                        className="text-center lg:text-left"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        <motion.h1
                            className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-7xl"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient">
                                Crafting Digital Solutions
                            </span>
                            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 animate-gradient">
                                That Work for You
                            </span>
                        </motion.h1>
                        <motion.p
                            className="mt-5 max-w-md text-base sm:text-lg md:mt-6 md:text-xl md:max-w-3xl text-slate-700 mx-auto lg:mx-0"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            We specialize in crafting bespoke websites and apps that perfectly fit your unique needs.
                            Our agile approach ensures swift delivery, coupled with personalized service at every step,
                            to bring your digital vision to life quickly and effectively.
                        </motion.p>
                        <motion.div
                            className="mt-8 w-full sm:w-auto flex justify-center lg:justify-start gap-4"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 },
                            }}
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

            {/* Scroll Indicator */}
            <div className="w-full py-6">
                <ScrollIndicator />
            </div>
        </section>
    );
}