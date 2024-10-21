import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = (Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const slideAnimation = useAnimation();
  const slideHideAnimation = useAnimation();

  const slideInVariants = {
    visible: {
      opacity: 1,
      [Props.direction]: 0,

      transition: { duration: 0.8, delay: Props.delay, ease: "easeInOut" },
    },

    hidden: { opacity: 0, [Props.direction]: [Props.offset] },
  };

  useEffect(() => {
    if (isInView) {
      slideAnimation.start("visible");
    }

    if (!isInView) {
      slideHideAnimation.start("hidden");
    }
  }, [isInView, slideAnimation, slideHideAnimation]);

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        variants={slideInVariants}
        animate={slideAnimation}
      >
        {Props.children}
      </motion.div>
    </div>
  );
};
