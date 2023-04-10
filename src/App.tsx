import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CustomBackground from "./assets/CustomBackground";
import "./styles.css";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<"projects" | "about" | "contact">(
    "projects"
  );


  return (
    <Router>
      <Layout setCurrentPage={setCurrentPage}>
        <CustomBackground>
          <Routes>
            <Route path="/" element={<Projects currentPage={currentPage} />} />
            <Route path="/about" element={<About currentPage={currentPage} />} />
            <Route path="/contact" element={<Contact currentPage={currentPage} />} />
          </Routes>
        </CustomBackground>
      </Layout>
    </Router>
  );
};

export default App;
