import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/HomePage";
import ProductDetail from "../components/products/ProductDetail";
import ProductDetailsLayout from "../layouts/ProductDetailsLayout";
import BasketList from "../components/basket/BasketList";
import SiparisVer from "../components/siparirver/SiparisVer";
import OrderForm from "../components/OrderForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sepet",
        element: <BasketList />,
      },
      {
        path: "/siparis-ver",
        element: <OrderForm />,
      },

      {
        path: "/siparis-detay/:id",
        element: <ProductDetailsLayout />,
        children: [
          {
            index: true,
            element: <ProductDetail />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
