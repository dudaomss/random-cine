import { motion } from "framer-motion";

const fadeInParametros = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInParametros}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;


