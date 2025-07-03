import { motion } from "framer-motion";

const BenefitCard = ({ benefit, animate }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: animate === "left" ? -50 : animate === "right" ? 50 : 0,
      y: animate === "up" ? -50 : animate === "down" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className="max-w-sm w-full min-w-[280px] bg-black p-6 max-sm:px-4 rounded-lg space-y-4"
    >
      <span className="h-6 w-6 block text-center rounded-full bg-gray-300">
        {benefit?.id}
      </span>
      <p className="text-gray-300 font-light text-center">{benefit?.promise}</p>
    </motion.div>
  );
};

export default BenefitCard;
