import React from "react";
import { motion } from "framer-motion";

type Props = {
  currentPage: "projects" | "about" | "contact";
};

const Contact: React.FC<Props> = ({ currentPage }) => {


  return (
    <>
      {currentPage === "contact" && (
        <motion.div
          key="contact-motion"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x:0 ,transition: { duration: 0.75 }}}
          exit={{ opacity: 0, x:100, transition: { duration: 0.75 } }}
        >
          <div className="contact">
            <h1>Contact</h1>
          </div>
        </motion.div>
      )}
      </>
  );
};

export default Contact;
