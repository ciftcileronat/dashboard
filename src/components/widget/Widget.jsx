import "./widget.scss";

import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const Widget = ({ type }) => {
    let data;

    //Temp
    const amount = 100;
    const diff = 20;

    if (type === "user") {
        data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (<PersonIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }} />)
        }
    }
    else if (type === "order") {
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "See all orders",
            icon: (<ShoppingCartIcon className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218,165,32,0.2)" }} />)
        }
    }
    else if (type === "earnings") {
        data = {
            title: "EARNINGS",
            isMoney: false,
            link: "See all earnings",
            icon: (<MonetizationOnIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }} />)
        }
    }
    else if (type === "balance") {
        data = {
            title: "BALANCE",
            isMoney: false,
            link: "See all balance",
            icon: (<AccountBalanceWalletIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }} />)
        }
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <NorthEastIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget