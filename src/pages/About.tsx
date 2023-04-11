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
                <h1 className="text-2xl font-bold mb-4">
                  Full-stack software developer based in Chicago, IL,
                  specializing in creating responsive, user-friendly web
                  applications with a focus on e-commerce solutions. With over 7
                  years of experience in eCommerce management and a deep
                  understanding of front-end and back-end technologies, I
                  possess a unique blend of technical expertise and
                  customer-centric mindset that enable me to design and develop
                  high-quality web experiences.
                </h1>
                <div>
                  <p className="mb-4">
                    I am passionate about continuous learning and
                    problem-solving, which is why I pursued a certificate in
                    full-stack JavaScript development through Code Fellows. This
                    program allowed me to sharpen my skills in various
                    languages.
                  </p>
                  <p>
                    Thanks to my proficiency in various tools and frameworks, I
                    feel well-equipped to tackle even the most complex software
                    projects. I am excited to continue honing my skills and
                    using them to develop innovative solutions in the field of
                    software development.
                  </p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-2">Availability</h3>
                  <p>April 2023 -</p>
                  <p>Remotely or in Chicagoland Area</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technologies</h3>
                  <h4 className="text-lg font-semibold">Languages</h4>
                  <ul className="list-disc list-inside grid grid-cols-2">
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
                  <ul className="list-disc list-inside grid grid-cols-2">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Sass</li>
                    <li>PostCSS</li>
                    <li>Vite</li>
                    <li>GitHub</li>
                    <li>Git</li>
                    <li>Express.js</li>
                    <li>Node</li>
                    <li>Next.js</li>
                    <li>Redux.js</li>
                    <li>React Native</li>
                    <li>Axios</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Socket.io</li>
                    <li>AWS Lambda</li>
                    <li>AWS DynamoDB</li>
                    <li>AWS S3</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS EC2</li>
                    <li>Netlify</li>
                    <li>Heroku</li>
                    <li>Bootstrap</li>
                    <li>CodeSandbox</li>
                    <li>VS Code</li>
                    <li>Render</li>
                    <li>Sequelize</li>
                    <li>Expo</li>
                    <li>Shopify</li>
                    <li>Mantine</li>
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
