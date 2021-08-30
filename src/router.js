import Dashboard from "./Components/Layouts/Dashboard";
import Serial from "./Components/Layouts/Serial";
import Network from "./Components/Layouts/Network";

export const routes = [
    {
        path: "/dashboard",
        label: "Dashboard",
        component: Dashboard
    },
    {
        path: "/serial",
        label: "Serial Interface Configuration",
        component: Serial
    },
    {
        path: "/network",
        label: "Network Configuration",
        component: Network
    },
    {
        path: "/",
        label: "Dashboard",
        component: Dashboard
    },
]