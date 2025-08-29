// @refresh reload
import { type RouteDefinition, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import { querySession } from "./auth";
import Auth from "./components/Context";
import Nav from "./components/Nav";

export const route: RouteDefinition = {
  preload: ({ location }) => querySession(location.pathname)
};

export default function App() {
  return (
    <Router
      root={props => (
        <Auth>
          <Suspense>
            <Nav />
            {props.children}
          </Suspense>
        </Auth>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
