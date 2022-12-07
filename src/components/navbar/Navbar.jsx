import { useContext } from "react";
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MenuIcon from '@mui/icons-material/Menu';
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="icon" /> English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <MenuIcon className="icon" />
                    </div>
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/7047611/pexels-photo-7047611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar