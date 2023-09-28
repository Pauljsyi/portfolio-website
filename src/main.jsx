import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import CanvasLoader from "./components/Loader";
import App from "./App.jsx";

import "./index.css";

// function delay(promise) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }

// const DelayedAppContainer = lazy(() => delay(import("./App")));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Suspense fallback={<CanvasLoader />}> */}
    <App />
    {/* <DelayedAppContainer /> */}
    {/* </Suspense> */}
  </React.StrictMode>
);
