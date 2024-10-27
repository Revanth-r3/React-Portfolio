import React from 'react';
import { motion } from 'framer-motion';

const Stats = ({ direction = 'left' }) => {
  const statsCardUrl = "https://leetcard.jacoblin.cool/revanth33?theme=light&font=Jomolhari&ext=heatmap"; // Replace with your actual stats card URL

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? '-50%' : '50%', // Move out of view
    },
    visible: {
      opacity: 1,
      x: 0, // Move into view
    },
  };

  return (
    <motion.div
      className="border-b border-neutral-800 pb-24"
      initial="hidden"
      animate="visible"
      variants={slideInVariants}
      transition={{ duration: 0.5 }} // You can adjust the duration
    >
      <h1 className="my-20 text-center text-4xl">LeetCode</h1>

      <div className="flex justify-center">
        <iframe
          src={statsCardUrl}
          title="LeetCode Stats Card"
          width="100%"
          height="350" // You can adjust this value to fit your layout
          style={{ border: "none", borderRadius: "8px" }}
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Stats;
