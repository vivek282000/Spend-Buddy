import {dashboard, expenses, transactions, trend} from '../utils/Icons'
const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};
export const menuItems = [
    
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
        icon: transactions,
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "Logout",
        icon: expenses,
        link: {handleLogout},
    },
]