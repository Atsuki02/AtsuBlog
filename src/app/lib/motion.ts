export const navMenuShowVariantsFromLeft = {
  hidden: {
    x: -350,
    transition: {
      type: "tween",
      damping: 140,
    },
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
  exit: {
    x: 350,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const navMenuHideVariants = {
  show: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
  hidden: {
    x: -350,
    transition: {
      type: "tween",
      damping: 140,
    },
  },
};
