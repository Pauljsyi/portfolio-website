import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
// import { navLinks } from "../constants";
import { logo1, menu, close } from "../assets";
import helpers from "../utils/helpers";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  { id: "skills", title: "Skills" },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, state, setState) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setState(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const Navbar = () => {
  const wrapperRef = useRef(null);
  const { mediaQueryFunc } = helpers;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // set full screen state
  const [isFS, setIsFS] = useState(false);
  useOutsideAlerter(wrapperRef, toggle, setToggle);

  useEffect(() => {
    mediaQueryFunc("change", 800, setIsFS);
  }, []);

  const handleClick = () => {};

  return (
    <nav
      className={`${styles.paddingX} w-full flex  py-5 fixed bg-black z-[1]`}
    >
      <div className="w-full flex justify-around items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo1} alt="logo" className="w-5 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Paul Yi
          </p>
        </Link>

        {/* FULL SCREEN */}
        <ul
          className={` ${
            !isFS ? null : "hidden"
          } list-none flex flex-row gap-10`}
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* MOBILE */}
        <div className={`${isFS ? "" : "hidden"}`} ref={wrapperRef}>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
            ref={wrapperRef}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
