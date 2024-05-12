import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AddFoodPage from "../pages/AddFoodPage";
import AddedFoodsPage from "../pages/AddedFoodsPage";
import OrderedFoodsPage from "../pages/OrderedFoodsPage";
import AllFoodsPage from "../pages/AllFoodsPage";
import SingleFoodPage from "../pages/SingleFoodPage";
import PurchaseFoodPage from "../pages/PurchaseFoodPage";
import GalleryPage from "../pages/GalleryPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/addedFoods",
        element: (
          <PrivateRoute>
            <AddedFoodsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/orderedFoods",
        element: (
          <PrivateRoute>
            <OrderedFoodsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/allFoods",
        element: <AllFoodsPage />,
      },
      {
        path: "/allFoods/foodDetails/:id",
        element: <SingleFoodPage />,
      },
      {
        path: "/purchaseFood",
        element: (
          <PrivateRoute>
            <PurchaseFoodPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

export default router;
