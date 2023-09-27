import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { github } from "../assets/index";

const DialogModal = ({ currProject, open, setOpen, handleOpen }) => {
  const card = currProject;
  return (
    <Dialog
      size="lg"
      open={open}
      className="sm:w-[100%]  lg:w-[800px] m-auto border-2 "
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
          {card.site === "" ? (
            "under construction"
          ) : (
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
          className={`absolute top-0 left-0 backdrop-blur-sm backdrop-brightness-50  grayscale-[40%] w-[100%] h-[100%]`}
        >
          <Typography
            color="blue-gray"
            className={`font-small mx-[100px] mt-[50px]`}
          >
            {card.desc}
          </Typography>
          {/* <Typography
            color="blue-gray"
            className={`font-small mx-[100px] mt-[50px]`}
          >
            {card.stack + ", "}
          </Typography>
          <Typography
            color="blue-gray"
            className={`font-small mx-[100px] mt-[50px]`}
          >
            {card.desc}
          </Typography> */}
        </div>
      </DialogBody>
      <DialogFooter className="justify-between">
        <div className="flex items-center gap-16">
          <div>
            <Typography variant="small" color="white" className="font-normal">
              The Stack:
            </Typography>
          </div>
          <div>
            <Typography variant="small" color="white" className="font-normal">
              {card.stack + ", "}
            </Typography>
          </div>
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
