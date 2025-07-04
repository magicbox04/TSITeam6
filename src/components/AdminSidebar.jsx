import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/DashboardPage.css';
import logo from '../assets/fundhomecarelogo.png';
import { UserAuth } from "../context/AuthContext";

const AdminSidebar = () => {
    const navigate = useNavigate();
    const { userRole } = UserAuth();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <div className="sidebar">
            <img src={logo} alt="Fund Homecare Logo" className="sidebar-logo" />
            <ul className="sidebar-menu">
                <li>
                    <Link to="/admin-dashboard">📄 Grants</Link>
                </li>
                <li>
                    <Link to="/settings">⚙️ Settings</Link>
                </li>
            </ul>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
    );
};

export default AdminSidebar;
