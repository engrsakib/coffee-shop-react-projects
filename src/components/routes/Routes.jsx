import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboards from "../pages/Dashboards";
import CoffeCards from '../CofferCards/CoffeCards'

const routs = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <CoffeCards></CoffeCards>,
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "/dashboard",
        element: <Dashboards></Dashboards>,
      },
    ],
  },
  {
    path: "/sakib",
    element: <p>sakib</p>,
  },
]);
export default routs;