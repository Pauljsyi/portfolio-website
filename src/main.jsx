import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import CanvasLoader from "./components/Loader";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Suspense fallback={<CanvasLoader />}> */}
    <App />
    {/* </Suspense> */}
  </React.StrictMode>
);
