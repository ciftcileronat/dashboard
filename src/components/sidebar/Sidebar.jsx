import { useContext } from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import BorderAllIcon from '@mui/icons-material/BorderAll';

import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" className="sideBarLink">
                    <span className="logo">Logo</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to="/" className="sideBarLink">
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                    <Link to="/users" className="sideBarLink">
                        <li>
                            <PersonIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <p className="title">LIST</p>
                    <Link to="/products" className="sideBarLink">
                        <li>
                            <CategoryIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <Link to="/orders" className="sideBarLink">
                        <li>
                            <BorderAllIcon className="icon" />
                            <span>Orders</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar