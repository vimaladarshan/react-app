import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import Error from "./src/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/About";
import RestroMenu from "./src/RestroMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetchUserInfo();
  }, []);
  const fetchUserInfo = async () => {
    let userInfoDetails = await fetch(
      "https://api.github.com/users/vimaladarshan"
    );
    userInfoDetails = await userInfoDetails.json();
    setUserInfo(userInfoDetails);
  };
  return (
    <Provider store={appStore}>
      <userContext.Provider value={userInfo}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </userContext.Provider>
    </Provider>
  );
};
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
