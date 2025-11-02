import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./Layout/RootLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import AllProducts from "./Components/AllProducts/AllProducts.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Register from "./Components/Register/Register.jsx";
import MyProducts from "./Components/MyProducts/MyProducts.jsx";
import MyBids from "./Components/MyBids/MyBids.jsx";
import Login from "./Components/Login/Login.jsx";
import ProductsDetails from "./Components/ProductsDetails/ProductsDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/myProducts",
        element: <MyProducts />,
      },
      {
        path: "myBids",
        element: <MyBids />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/productsDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products${params.id}`),
        element: <ProductsDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);
