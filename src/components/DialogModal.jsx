import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";
import { github } from "../assets/index";

const DialogModal = ({ currProject, open, setOpen, handleOpen }) => {
  const card = currProject;
  console.log("dialogModal!!!!!!!", { currProject }, { open });
  return (
    <Dialog
      size="small"
      open={open}
      className="sm:w-[100%] md:w-[700px] lg:w-[800px] m-auto "
      id="dialog"
      onClick={() => console.log("you clicked dialog")}
    >
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <div className="-mt-px flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {card.title}
            </Typography>
            <Typography
              variant="small"
              color="white"
              className="text-xs font-normal"
            >
              @pauljsyi
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {card.site === "" ? null : (
            <p size="lg">
              <a href={card.site} target="_blank">
                link to site
              </a>
            </p>
          )}
          <Button size="xl" onClick={handleOpen}>
            <h1 className="text-[30px]">X</h1>
          </Button>
        </div>
      </DialogHeader>
      <DialogBody divider={true} className="p-0 ">
        <img
          alt="nature"
          className="h-[50%] w-full object-cover object-center relative"
          src={card.url}
        />
        <div
          className={`absolute top-0 left-0 backdrop-blur-sm backdrop-brightness-50  w-[100%] h-[100%]`}
        >
          <Typography color="blue-gray" className={`font-small`}>
            {card.desc}
          </Typography>
        </div>
      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="flex items-center gap-16">
          {/* <div>
            <Typography variant="small" color="gray" className="font-normal">
              Views
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="gray" className="font-normal">
              Downloads
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              553,031
            </Typography>
          </div> */}
        </div>
        <Button
          size="sm"
          variant="outlined"
          color="blue-gray"
          className="flex flex-row items-center gap-3"
        >
          <a
            className="flex flex-row items-center "
            href={card.gh}
            target="_blank"
          >
            <img className="w-[25px] mr-[10px]" src={github} alt="github" />
            <p>github</p>
          </a>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default DialogModal;
