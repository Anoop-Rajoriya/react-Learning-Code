console.log("running script!");

import reactDom from "react-dom/client";
import App from "./App";
reactDom.createRoot(document.querySelector("#root")).render(<App/>);
