import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import Error from "./src/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/About";
import RestroMenu from "./src/RestroMenu";
const AppLayout = () => (
  <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
  </>
);
const Grocery = lazy(() => import("./src/Grocery"));
const Contact = lazy(() => import("./src/Contact"));
const Location = lazy(() => import("./src/Location"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/aboutus", element: <About /> },
      {
        path: "/contactus",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/location",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Location />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resid", element: <RestroMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
