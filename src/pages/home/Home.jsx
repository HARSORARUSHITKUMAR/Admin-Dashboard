import React from 'react'
import './Home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Widgets from '../../Components/widgets/Widgets';
import Chart from '../../Components/chart/Chart';
import Piechart from '../../Components/piechart/Piechart';
import Tab from '../../Components/tab/Tab';

const Home = () => {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widgets type="orders" />
            <Widgets type="new sign up" />
            <Widgets type="delivery boys" />
            <Widgets type="products" />
          </div>
          <div className="charts">
            <Chart title="Product Sales" aspect={2 / 1}/>
             <Piechart />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Tab />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
