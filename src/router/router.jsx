import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import AddLostAndFoundItemPage from "../pages/AddLostAndFoundItemPage";
import AllRecoveredItemsPage from "../pages/AllRecoveredItemsPage";
import ManageMyItemsPage from "../pages/ManageMyItemsPage";
import LostAndFoundItemsPage from "../pages/LostAndFoundItemsPage";
import PrivateRoute from "../components/PrivateRoute";
import RegisterPage from "../pages/RegisterPage";

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
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/allItems",
        element: <LostAndFoundItemsPage />,
      },
      {
        path: "/addItems",
        element: (
          <PrivateRoute>
            <AddLostAndFoundItemPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/allRecovered",
        element: (
          <PrivateRoute>
            <AllRecoveredItemsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <ManageMyItemsPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
