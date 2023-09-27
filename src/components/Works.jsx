import HorizontalScroll from "./HorizontalScroll";
import { Wrapper } from "./hoc";

const Works = () => {
  return (
    <div>
      <HorizontalScroll />
    </div>
  );
};

export default Wrapper(Works, "work");
// export default Works;
