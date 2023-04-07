import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import CustomBackground from './assets/CustomBackground';
import './styles.css';


const App: React.FC = () => {
  return (
    <Router>
        <Layout>
            {/* <CustomBackground> */}
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
            {/* </CustomBackground> */}
        </Layout>
    </Router>
  );
};

export default App;
