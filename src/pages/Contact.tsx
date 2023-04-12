import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomAlert from "../components/CustomAlert";

type Props = {
  currentPage: "projects" | "about" | "contact";
};

const Contact: React.FC<Props> = ({ currentPage }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        // Reset form fields after successful submission
        setName("");
        setEmail("");
        setMessage("");

        // Show the custom alert when the message is successfully sent
        setShowAlert(true);

        // Hide the custom alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      } else {
        console.error("An error occurred");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      {currentPage === "contact" && (
        <motion.div
          key="contact-motion"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.75 } }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.75 } }}
        >
          <div className="contact">
            <AnimatePresence mode="wait">
              {showAlert && <CustomAlert />}
            </AnimatePresence>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md mt-8 ml-auto text-left mr-10"
            >
              <p className="font-medium mb-4">
                Connect with Me! Submit Your Details and Send a Direct Email to
                My Inbox.
              </p>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <motion.button
                initial={{ opacity: 0.6 }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Contact;
