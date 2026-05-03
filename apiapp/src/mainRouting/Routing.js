import { createBrowserRouter } from "react-router-dom";

import MyCarousel from "../Components/MyCarousal";
import Counter from "../Layout/counter";
import PageNotFound from "../Layout/PageNotFoundComp";
import DashBoard from "../Layout/DashboardComp";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      { index: true, element: <Counter /> }, // 👈 default page ab counter
      { path: "mycarousel", element: <MyCarousel /> },
      { path: "counter", element: <Counter /> }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

export default router;