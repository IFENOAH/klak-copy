export const PostCardVariants = {
    initial: {
        opacity: 0.7,
        y: 30,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.4,
        },
    },
    exit: {
        opacity: 0.3,
        transition: {
            ease: "easeOut",
            duration: 0.4,
        },
    },
};

export const TextVariants = {
    initial: {
        opacity: 0.7,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0.3,
        transition: {
            ease: "easeOut",
            duration: 0.5,
        },
    },
};