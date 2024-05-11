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
        element: <AddFoodPage />,
      },
      {
        path: "/addedFoods",
        element: <AddedFoodsPage />,
      },
      {
        path: "/orderedFoods",
        element: <OrderedFoodsPage />,
      },
      {
        path: "/allFoods",
        element: <AllFoodsPage />,
      },
      {
        path: "/allFoods/foodDetails",
        element: <SingleFoodPage />,
      },
      {
        path: "/purchaseFood",
        element: <PurchaseFoodPage />,
      },
    ],
  },
]);

export default router;
