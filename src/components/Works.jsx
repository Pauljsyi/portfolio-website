import HorizontalScroll from "./HorizontalScroll";
import { Wrapper } from "./hoc";

const Works = () => {
  return (
    <div className="relative ">
      <HorizontalScroll />
    </div>
  );
};

export default Wrapper(Works, "work");
// export default Works;
