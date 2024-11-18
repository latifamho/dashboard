import React, { useEffect } from "react";
import Menu from "./components/Menu.tsx";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getIdCookie } from "./utils/Cookie.js";
const Q = new QueryClient();

export default function App() {
    const location = useLocation();
    const router = useNavigate();
    useEffect(() => {
        const isAuthenticated = getIdCookie();
        if (!isAuthenticated) {
            router("/login", { path: true });
        }
    }, [location]);
    return (
        <QueryClientProvider client={Q}>
            <div className="app min-h-[100vh] flex text-black bg-slate-100">
                <Menu />
                <ToastContainer />
                <Outlet />
            </div>
        </QueryClientProvider>
    );
}
