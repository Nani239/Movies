import React, { lazy, Suspense } from "react";
// import { includes, isEmpty } from "lodash";
// import { useSelector } from 'react-redux';
import { useRouteMatch, Switch, Route } from "react-router-dom";

const routes = [
  {
    path: "Telugu-Movies",
    component: lazy(() => import("./TeluguMovies")),
    exact: true,
  },
  {
    path: "English-Movies",
    component: lazy(() => import("./EnglishMovies")),
    exact: true,
  },
  {
    path: "Malayalam-Movies",
    component: lazy(() => import("./MalayalamMovies")),
    exact: true,
  },
  {
    path: "Hindi-Movies",
    component: lazy(() => import("./HindiMovies")),
    exact: true,
  },
  {
    path: "Tamil-Movies",
    component: lazy(() => import("./TamilMovies")),
    exact: true,
  },
  {
    path: "Kannada-Movies",
    component: lazy(() => import("./KannadaMovies")),
    exact: true,
  },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
//   const access = useSelector((state) => state.Auth.access);
//   const userData = useSelector((state) => state.Auth.userData);
//   const userType = (!isEmpty(userData) && userData.user_type) || "";

  return (
    <Suspense>
      <Switch>
        {routes.map((route) => {
        //   const accessKey = accessMenus[route.path] || "";
        //   const showRoute = access[accessKey] || !accessKey;
        //   const upScreen = upgradeScreens.indexOf(route.path) > -1;

          // Hide screens which are not accessible by user
        //   if (!upScreen && !showRoute) return null;

        //   const findUserType = route.userType
        //     ? includes(route.userType)
        //     : "";
        //   if (!findUserType) return null;

          // Show loader for paid screens while getting user's access data
        //   if (upScreen && access.loading)
        //     return <Loader key={`loader_${route.path}`} />;

          return (
            <Route
              exact={route.exact}
              key={`route_${route.path}`}
              path={`${url}/${route.path}`}
            >
              {/* {showRoute ? <route.component /> : <UpgradePlanMsg />} */}
            </Route>
          );
        })}
      </Switch>
    </Suspense>
  );
}
