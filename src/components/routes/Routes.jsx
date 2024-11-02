import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainLayouts from "../layouts/MainLayouts";

const routs = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
  },
]);
export default routs;