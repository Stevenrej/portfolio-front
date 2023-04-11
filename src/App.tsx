import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import CustomBackground from "./assets/CustomBackground";
import "./styles.css";
import AnimatedRoutes from "./AnimatedRoutes";

type Page = "projects" | "about" | "contact";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<Page>("projects");

  return (
    <Router>
      <Layout setCurrentPage={setCurrentPage} currentPage={currentPage}>
        <CustomBackground>
          <AnimatedRoutes currentPage={currentPage} />
        </CustomBackground>
      </Layout>
    </Router>
  );
};

export default App;
