import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Wrapper } from "./hoc";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
const PUBLIC_KEY = import.meta.env.REACT_APP_EMAIL_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.REACT_APP_EMAIL_TEMPLATE_ID;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      "service_iuy4o7g",
      "template_6qr4tw8",
      {
        from_name: form.name,
        to_name: "Paul",
        from_email: form.email,
        to_email: "pauljsyi@gmail.com",
        message: form.message,
      },
      "D0ahM4ki2k3JxooDc"
    );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden max-w-[900px] justify-end">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 bg-[#080E15]"
      >
        <h3 className={styles.sectionHeadText}>contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col flex items-start border-b border-teal-500 py-2">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
            />
          </label>
          <label className="flex flex-col flex items-start border-b border-teal-500 py-2">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
            />
          </label>
          <label className="flex flex-col flex items-start border-b border-teal-500 py-2">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none "
            />
          </label>
          <button
            className="bg-white w-fit hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Wrapper(Contact, "contact");
