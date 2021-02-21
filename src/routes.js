import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    pablic: true,
    restricted: false,
    component: lazy(() =>
      import("./view/HomeView.js" /* webpackChunkName: "home-view" */)
    ),
  },
];
