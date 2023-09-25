import React, { useEffect, useState } from "react";
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
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const { mediaQueryFunc } = helpers;
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  // set full screen state
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", setIsFS);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex  py-5 fixed bg-black z-50`}>
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
        <div className="sm:hidden  ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
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
