import "./single.scss";
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"
const Single = () => {
    return (
        <>
            <div className="singleTop">
                <div className="singleLeft">
                    <div className="singleEditButton">Edit</div>
                    <h3 className="singleTitle">Information</h3>
                    <div className="singleItem">
                        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="singleItemImg" />
                        <div className="singleDetails">
                            <h1 className="singleItemTitle">Jane Doe</h1>
                            <div className="singleDetailItem">
                                <span className="singleItemKey">E-Mail:</span>
                                <span className="singleItemValue">janedoe@gmail.com</span>
                            </div>
                            <div className="singleDetailItem">
                                <span className="singleItemKey">Phone:</span>
                                <span className="singleItemValue">073 904 2952</span>
                            </div>
                            <div className="singleDetailItem">
                                <span className="singleItemKey">Address:</span>
                                <span className="singleItemValue">Elton St. 234 Garden Yd.</span>
                            </div>
                            <div className="singleDetailItem">
                                <span className="singleItemKey">Country:</span>
                                <span className="singleItemValue">USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="singleRight">
                    <Chart aspect={5 / 1} title="User Expenses (Last 6 Months)" />
                </div>
            </div>
            <div className="singleBottom">
                <h3 className="singleTitle">Last Transactions</h3>
                <List />
            </div>
        </>
    )
}

export default Single