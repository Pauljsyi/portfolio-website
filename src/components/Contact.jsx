import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Wrapper } from "./hoc";
import { Footer } from "./index";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
const PUBLIC_KEY = import.meta.env.REACT_APP_EMAIL_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.REACT_APP_EMAIL_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.REACT_APP_EMAIL_TEMPLATE_ID;
const initialValue = { name: "", email: "", message: "" };

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
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
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm(initialValue);
      })
      .catch((error) => {
        setLoading(false);
        console.error({ error });
        alert("Something went wrong.");
      });
  };
  const [mousePosition, setMousePosition] = useState(undefined);
  useEffect(() => {
    function handleMouseMove(event) {
      const spotlightEl = document.querySelector("#spotlight-contact");
      const { clientX, clientY } = event;
      setMousePosition(event);
      spotlightEl.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, #00cea8 ,100px, transparent 25%)`;
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);
  return (
    <>
      <div className="w-full h-screen max-h-[1200px] mt-[-24px] bg-[#292d32] flex justify-center">
        <div className="w-full h-[100%] mx-auto" id="contact-screen">
          <div id="spotlight-contact"></div>
        </div>

        <div className="static xl:flex-row flex-col-reverse flex gap-10 overflow-hidden max-h-screen justify-center pt-[150px]  max-w-screen mr-[50px] ">
          <motion.div
            variants={slideIn("right", "tween", 0.5, 1.5)}
            className="w-[600px] flex-[0.75] p-8 justify-center bg-[#292d32]"
          >
            <div>
              <h3 className={styles.sectionHeadText}>contact.</h3>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8 "
              >
                <label className="flex flex-col flex items-start border-b border-teal-500 py-2">
                  <span className="text-[white] font-medium mb-4">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="appearance-none bg-transparent border-none w-full text-[white] mr-3 py-1 px-2 leading-tight focus:outline-none "
                  />
                </label>
                <label className="flex flex-col flex items-start border-b border-teal-500 py-2">
                  <span className="text-[white] font-medium mb-4">
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="appearance-none bg-transparent border-none w-full text-[white] mr-3 py-1 px-2 leading-tight focus:outline-none "
                  />
                </label>
                <label className="flex flex-col flex items-start border-b border-teal-500 py-2">
                  <span className="text-[white] font-medium mb-4">
                    Your Message
                  </span>
                  <textarea
                    rows="7"
                    type="text"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What would you like to say?"
                    className="appearance-none bg-transparent border-none w-full text-[white] mr-3 py-1 px-2 leading-tight focus:outline-none "
                  />
                </label>
                <button
                  className="hover:bg-[#FF8787] bg-[white] w-fit text-black  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Wrapper(Contact, "contact");
