import { motion } from "framer-motion";

const CustomAlert: React.FC = () => {
  return (
    <motion.div
      key="contact-motion"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.75 } }}
      style={{ maxWidth: "600px" }}
    >
      <div
        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded absolute text-left"
        role="alert"
      >
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline">
          {" "}
          Your message has been sent successfully.
        </span>
      </div>
    </motion.div>
  );
};

export default CustomAlert;
