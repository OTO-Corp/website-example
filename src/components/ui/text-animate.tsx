import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ElementType } from "react";

type AnimationVariant = "blurIn" | "blurInUp" | "fadeIn" | "fadeInUp" | "slideUp" | "slideLeft" | "scaleUp";

interface TextAnimateProps {
    children: string;
    className?: string;
    delay?: number;
    duration?: number;
    as?: ElementType;
    by?: "text" | "word" | "character" | "line";
    startOnView?: boolean;
    once?: boolean;
    animation?: AnimationVariant;
    key?: string | number;
}

const animations = {
    blurIn: {
        initial: { filter: "blur(10px)", opacity: 0 },
        animate: { filter: "blur(0px)", opacity: 1 },
    },
    blurInUp: {
        initial: { filter: "blur(10px)", opacity: 0, y: 20 },
        animate: { filter: "blur(0px)", opacity: 1, y: 0 },
    },
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    },
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
    },
    slideUp: {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    },
    slideLeft: {
        initial: { x: 100, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    },
    scaleUp: {
        initial: { scale: 0.5, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
    },
};

export const TextAnimate = ({
    children,
    className,
    delay = 0,
    duration = 0.3,
    as: Component = "p",
    by = "word",
    once = false,
    animation = "fadeIn",
    key,
}: TextAnimateProps) => {
    const words = by === "word" ? children.split(" ") : children.split("");

    return (
        <Component className={cn("inline-block", className)}>
            {words.map((word, index) => (
                <motion.span
                    key={`${key}-${index}`}
                    className="inline-block mr-1.5"
                    initial={animations[animation].initial}
                    animate={animations[animation].animate}
                    transition={{
                        duration,
                        delay: delay + index * 0.1,
                        ease: "easeOut",
                    }}
                    viewport={{ once }}>
                    {word}
                </motion.span>
            ))}
        </Component>
    );
};
