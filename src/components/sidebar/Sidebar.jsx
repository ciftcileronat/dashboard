import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard"
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import BorderAllIcon from '@mui/icons-material/BorderAll';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Logo</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <PersonIcon className="icon" />
                        <span>Users</span>
                    </li>
                    <p className="title">LIST</p>
                    <li>
                        <CategoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <BorderAllIcon className="icon" />
                        <span>Orders</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar