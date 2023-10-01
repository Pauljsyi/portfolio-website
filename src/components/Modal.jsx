import React, { useRef, useEffect, useState } from "react";
import ReactDom from "react-dom";
import {
  githublight,
  githubdark,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  node,
  react,
  redux,
  tailwind,
  typescript,
  three,
  shopify,
  express,
  stripe,
  firebase,
  bootstrap,
  coffeeAPI,
  chakraui,
  dotnetcore,
  entityframework,
  mysql,
  razor,
  postgresql,
  mongoose,
  csharp,
} from "../assets/index";

const techIcons = {
  githubdark: githubdark,
  githublight: githublight,
  css: css,
  figma: figma,
  git: git,
  html: html,
  javascript: javascript,
  mongodb: mongodb,
  nodejs: node,
  react: react,
  redux: redux,
  tailwind: tailwind,
  typescript: typescript,
  threejs: three,
  shopify: shopify,
  express: express,
  stripe: stripe,
  firebase: firebase,
  bootstrap: bootstrap,
  coffeeAPI: coffeeAPI,
  chakraui: chakraui,
  dotnetcore: dotnetcore,
  entityframework: entityframework,
  mysql: mysql,
  razor: razor,
  postgresql: postgresql,
  mongoose: mongoose,
  csharp: csharp,
};

const Modal = (props) => {
  const { open, setOpen, currProject } = props;
  const [toggleDesc, setToggleDesc] = useState(false);

  const handleToggle = () => {
    // console.log(!!currProject.site);
    if (!currProject.site) {
      return;
    }
    setToggleDesc(!toggleDesc);
  };
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div
        className="backdrop-blur-lg"
        id="overlay"
        onClick={() => {
          setOpen(!open);
          document.body.style.overflow = "unset";
        }}
      />
      <div
        className="text-black flex flex-col w-[80%] h-[80%] rounded-md"
        id="modal-container"
      >
        {/* HEADER */}
        <div className="flex justify-between p-[15px]" id="modal-header">
          <div id="modal-header-left">
            <p className="text-[14px] font-bold">{currProject.title}</p>
            <p className="text-[11px]">@pauljsyi</p>
          </div>
          <div>
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <a
                className="flex items-center text-[14px]"
                href={currProject.gh}
              >
                <img
                  className=" w-[25px] mr-[10px]"
                  src={githubdark}
                  alt="github"
                />
                github
              </a>
            </button>
            <button
              className="mx-[5px] bg-white hover:bg-gray-100 text-gray-800  font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              onClick={handleToggle}
            >
              <a
                className="flex items-center text-[14px]"
                // href={currProject.gh}
              >
                <img className=" w-[25px] mr-[10px]" src={react} alt="github" />
                {!!currProject.site && !toggleDesc ? (
                  "see description"
                ) : (
                  <p>{!currProject.site ? "no preview" : " see preview"}</p>
                )}
              </a>
            </button>
          </div>

          <div
            className="flex flex-row items-center justify-between "
            id="modal-header-right"
          >
            {currProject.site === "" ? (
              "under construction"
            ) : (
              <a
                className="text-[14px]"
                href={currProject.site}
                rel="noreferrer"
                target="_blank"
              >
                go to site
              </a>
            )}
            <button
              size="xl"
              onClick={() => {
                setOpen(!open);
                document.body.style.overflow = "unset";
              }}
            >
              <h1 className="text-[30px]">X</h1>
            </button>
          </div>
        </div>
        {/* BODY */}
        <div className="relative h-full max-h-[543px]" id="modal-body">
          <img
            alt={currProject.title}
            className="h-full w-full"
            src={currProject.url}
          />
          <div
            className={`absolute top-0 left-0 backdrop-blur-lg backdrop-brightness-[.60]  grayscale-[30%] w-[100%] h-full`}
          >
            {currProject.site && !toggleDesc ? (
              <iframe
                className="h-full w-full"
                title="coffeazy app"
                allow
                allowfullscreen="true"
                src={currProject.site}
              ></iframe>
            ) : (
              <p
                className={`lg:text-lg md:text-sm text-xs font-small lg:mx-[50px] mx-[10px] mt-[50px] text-[white]`}
              >
                {currProject.desc}
              </p>
            )}
          </div>
        </div>
        {/* FOOTER */}
        <div
          className="flex flex-col items-center justify-between"
          id="modal-footer"
        >
          <div>
            <p className="font-normal">The Stack:</p>
          </div>
          <div className="relative ">
            <div id="stack-item" className="font-normal flex  flex-wrap">
              {open
                ? currProject.stack.map((stack, indx) => (
                    <div className="m-[15px]" key={indx}>
                      <img
                        className="w-[45px]"
                        key={indx}
                        src={techIcons[stack]}
                        title={stack}
                        alt={stack}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
