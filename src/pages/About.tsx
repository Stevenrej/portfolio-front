import React from "react";
import { motion } from "framer-motion";

type Props = {
  currentPage: "projects" | "about" | "contact";
};

const About: React.FC<Props> = ({ currentPage }) => {
  return (
    <>
      {currentPage === "about" && (
        <motion.div
          key="about-motion"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.75 } }}
        >
          <div className="container mx-auto px-4 py-8 text-left">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
              <div className="col-span-2 md:col-span-3">
                <h1 className="text-2xl font-bold mb-4 text-gray-300">
                  Full-stack software developer based in Chicago, IL,
                  specializing in creating responsive, user-friendly web
                  applications with a focus on e-commerce solutions. With over 8
                  years of experience in eCommerce management and development, I
                  possess a unique blend of technical expertise and
                  customer-centric mindset that enables me to design and develop
                  high-quality web experiences.
                </h1>
                <div>
                  <p className="mb-4">
                    I am passionate about continuous learning and
                    problem-solving, which led me to pursue a certificate in
                    full-stack JavaScript development through Code Fellows. This
                    program allowed me to sharpen my skills in various languages
                    and technologies.
                  </p>
                  <p className="mb-4">
                    In my recent role at oBundle, I've further expanded my
                    expertise by building affiliate program applications,
                    creating custom order tools, and developing tailored
                    e-commerce solutions using platforms like BigCommerce. I've
                    collaborated closely with designers to implement
                    pixel-perfect, responsive interfaces and integrated complex
                    backend functionality to meet specific client needs.
                  </p>
                  <p className="mb-4">
                    My proficiency in various tools and frameworks, combined
                    with my recent experience in developing custom checkout
                    solutions and e-commerce themes, equips me to tackle complex
                    software projects efficiently. I'm excited to leverage these
                    skills to continue developing innovative solutions in the
                    field of software development.
                  </p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Availability</h3>
                  <p>October 2024 -</p>
                  <p>Remotely or in Chicagoland Area</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                  <h4 className="text-lg font-semibold">Languages</h4>
                  <ul className="list-none list-inside grid grid-cols-2 text-gray-300">
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SQL</li>
                    <li>Markdown</li>
                  </ul>
                  <h4 className="text-lg font-semibold mt-4">
                    Skills and Tools
                  </h4>
                  <ul className="list-none list-inside grid grid-cols-2 text-gray-300">
                    <li>React</li>
                    <li>Node</li>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Express.js</li>
                    <li>Next.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redux.js</li>
                    <li>Tailwind CSS</li>
                    <li>AWS</li>
                    <li>Firebase</li>
                    <li>Docker</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Axios</li>
                    <li>Figma</li>
                    <li>Vite</li>
                    <li>React Native</li>
                    <li>Sass</li>
                    <li>Socket.io</li>
                    <li>Bootstrap</li>
                    <li>Netlify</li>
                    <li>BigCommerce</li>
                    <li>Shopify</li>
                    <li>Sequelize</li>
                    <li>Expo</li>
                    <li>PostCSS</li>
                    <li>Mantine</li>
                    <li>Render</li>
                    <li>CodeSandbox</li>
                    <li>Gadget</li>
                    <li>WebDAV</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default About;
