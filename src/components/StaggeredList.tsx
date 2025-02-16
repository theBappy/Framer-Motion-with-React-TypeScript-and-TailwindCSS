import { motion } from "framer-motion";

const StaggeredList = () => {
  const items = ["item1", "item2", "item3", "item4", "item5"];
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.ul
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.3 }}
      className="flex flex-col items-center"
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-blue-500 text-white my-2 rounded-lg p-4"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggeredList;
