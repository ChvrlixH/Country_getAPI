import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";

import Country from "../pages/Site/Country/Country";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Country />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminRoot />,
    children: [],
  },
];
