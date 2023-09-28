import { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import CanvasLoader from "./components/Loader";
import helpers from "./utils/helpers";
import { Container } from "./components/index";

import("default-passive-events");

// async function delay(promise) {
//   try {
//     return await new Promise((resolve) => {
//       setTimeout(resolve, 20000);
//     }).then(() => promise);
//   } catch (error) {
//     console.error({ error });
//   }
// }

// const DelayedContainer = lazy(() => delay(import("./components/Container")));

function App() {
  const { mediaQueryFunc } = helpers;
  const [isFS, setIsFS] = useState(false);

  useEffect(() => {
    mediaQueryFunc("change", 945, setIsFS);
  }, [isFS]);
  return (
    <BrowserRouter>
      <Container />
    </BrowserRouter>
  );
}

export default App;
