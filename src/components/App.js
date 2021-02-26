import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { PublicRoute, PrivedRoute } from "./common/Routes";
import Layout from "./Layout/Layout";
import Header from "./Header/Header";
import routes from "../routes";

export default function App() {
  console.log("App");
  return (
    <Layout>
      <Header />
      <Suspense fallback={false}>
        <Switch>
          {routes.map((route) =>
            route.pablic ? (
              <PublicRoute key={route.label} {...route} />
            ) : (
              <PrivedRoute key={route.label} {...route} />
            )
          )}
        </Switch>
      </Suspense>
    </Layout>
  );
}
