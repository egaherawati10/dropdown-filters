import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { productsLoader } from "./loader/productsLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductPage />,
        loader: productsLoader,
    }
])