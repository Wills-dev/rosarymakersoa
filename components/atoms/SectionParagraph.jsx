import { motion } from "framer-motion";

import { itemVariants } from "../../anim";

const SectionParagraph = ({ children }) => {
  return (
    <motion.p
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.p>
  );
};

export default SectionParagraph;
