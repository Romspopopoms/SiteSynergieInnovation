import React from "react";
import { motion } from "framer-motion";

const AnimatedTitle = ({ text, className, isInView, delay = 0 }) => {
    const containerVariants = {
        hidden: {},
        visible: (i = 1) => ({
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay, // Apply the delay here
            },
        }),
    };

    const childVariants = {
        hidden: { rotateY: -90, y: 0, filter: "blur(4px)" },
        visible: {
            rotateY: 0,
            y: 0,
            filter: "blur(0px)",
            transition: { ease: "easeInOut", duration: 0.6 },
        },
    };

    return (
        <motion.h1
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {text.split(" ").map((word, wordIndex) => (
                <React.Fragment key={wordIndex}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={childVariants}
                            style={{ display: "inline-block" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span
                        variants={childVariants}
                        style={{ display: "inline-block", marginRight: "0.25em" }}
                    >
                        {" "}
                    </motion.span>
                </React.Fragment>
            ))}
        </motion.h1>
    );
};

export default AnimatedTitle;
