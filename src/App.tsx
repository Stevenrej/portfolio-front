import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import CustomBackground from "./assets/CustomBackground";
import "./styles.css";
import AnimatedRoutes from "./AnimatedRoutes";
import { motion, AnimatePresence } from "framer-motion";

type Page = "projects" | "about" | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>("projects");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      {loading ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="load-motion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.75 } }}
            exit={{ opacity: 0, transition: { duration: 0.75 } }}
            className="flex justify-center items-center h-screen"
          >
            <div className="text-4xl font-bold">Steven Rejdukowski's Fullstack Portfolio</div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key="content-motion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.75 } }}
          >
            <Layout setCurrentPage={setCurrentPage} currentPage={currentPage}>
              <CustomBackground>
                <AnimatedRoutes currentPage={currentPage} />
              </CustomBackground>
            </Layout>
          </motion.div>
        </AnimatePresence>
      )}
    </Router>
  );
};

export default App;
