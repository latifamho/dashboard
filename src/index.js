import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/form.tsx";
import Customers from "./components/Customars.jsx";
import Login from "./components/Login";
import AddCustomers from "./components/AddUser";
import Products from "./components/Products";
import AddProducts from "./components/AddProducts";
import Help from "./components/Help";
import AddAdmin from "./components/addAdmin";
import { ThemeProvider, createTheme } from "@mui/material";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Customers /> },
            {
                path: "dashboard",
                element: <Form />,
            },
            {
                path: "add_user",
                element: <AddCustomers />,
            },
            {
                path: "help",
                element: <Help />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "add_product",
                element: <AddProducts />,
            },
            {
                path: "add_admin",
                element: <AddAdmin />,
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
    },
]);
// checkLoginStatus();
const theme = createTheme({
    palette: {
        primary: {
            main: "#5932EA",
        },
    },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes} />{" "}
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
