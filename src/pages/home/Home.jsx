import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./home.scss";
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';

const Home = () => {
    return (
        <>
            <div className="homeWidgets">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earnings" />
                <Widget type="balance" />
            </div>

            <div className="homeCharts">
                <Featured />
                <Chart aspect={4 / 1} title="Last 6 Months (Revenue)" />
            </div>

            <div className="homeListContainer">
                <div className="homeListTitle">Latest Transactions</div>
                <Table />
            </div>
        </>
    )
}

export default Home