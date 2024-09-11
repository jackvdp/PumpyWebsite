import { motion } from 'framer-motion';
import {
    ChevronDownIcon,
} from '@radix-ui/react-icons';

export default function ScrollIndicator() {
    const scrollToBenefits = () => {
        const benefitsSection = document.getElementById('benefits');
        if (benefitsSection) {
            const yOffset = -24;
            const y = benefitsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <motion.div
            className="cursor-pointer mt-6"
            animate={{
                y: [0, 10, 0],
            }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            onClick={scrollToBenefits}
        >
            <ChevronDownIcon className="w-8 h-8 text-indigo-600 mx-auto" />
        </motion.div>
    );
}