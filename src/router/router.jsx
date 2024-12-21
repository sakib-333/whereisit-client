import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AddLostAndFoundItemPage from "../pages/AddLostAndFoundItemPage";
import AllRecoveredItemsPage from "../pages/AllRecoveredItemsPage";
import ManageMyItemsPage from "../pages/ManageMyItemsPage";
import LostAndFoundItemsPage from "../pages/LostAndFoundItemsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/allItems",
        element: <LostAndFoundItemsPage />,
      },
      {
        path: "/addItems",
        element: <AddLostAndFoundItemPage />,
      },
      {
        path: "/allRecovered",
        element: <AllRecoveredItemsPage />,
      },
      {
        path: "/myItems",
        element: <ManageMyItemsPage />,
      },
    ],
  },
]);
