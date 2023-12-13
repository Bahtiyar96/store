import { Routes, Route } from "react-router-dom";
import { Layout } from "../layout/layout";
import { authRoutes, routes } from ".";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      {authRoutes.map((route) => {
          return (
            <Route 
              key={route.title}
              path={route.link} 
              element={route.component} 
            />
          )
      })};
      <Route element={<Layout />}>
        {routes.map((route)=> {
            return (
              <Route
                key={route.title}
                path={route.link} 
                element={
                  <PrivateRoute roles={route.roles}>
                    {route.component}
                  </PrivateRoute>
                }
              />
            ) 
          })}
      </Route>
    </Routes>
  );
};
