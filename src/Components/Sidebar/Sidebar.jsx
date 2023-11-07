import React from "react";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { faRectangleAd } from "@fortawesome/free-solid-svg-icons";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faCarRear } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', textDecoration:'none' }}>
          <img src="./images/eShop.png" alt="" className="avatar" />
          <span className="logo">eShop - ecommerce</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
          <Link to="/Orders" style={{textDecoration:'none'}}>
            <FontAwesomeIcon icon={faShoppingCart} style={{color:'black'}} />
            <span>Orders</span>
          </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleDot} />
            <span>Categories</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRectangleAd} />
            <span>Brands</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBoxesStacked} />
            <span>Product</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBolt} />
            <span>Flash Sale</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCalculator} />
            <span>Point Of Scale</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faIcons} />
            <span>Media</span>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faImage}
              flip="horizontal"
            />
            <span>Sliders</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGift}  />
            <span>Offers</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCubes}  />
            <span>Manage Stocks</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faTicket}  />
            <span>Support Tickets</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPuzzlePiece}  />
            <span>Promo Code</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>Featured Section</span>
          </li>
          <li>
          <Link to="/Customers" style={{textDecoration:'none'}}>
            <FontAwesomeIcon icon={faUsers} style={{color:'black'}} />
            <span>Customers</span>
          </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowRotateLeft} />
            <span>Return Request</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faClipboardUser} />
            <span>Delivery Boys</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMoneyBills} />
            <span>Payment Requests</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Send Notification</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
            <span>Custome Message</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faGear} />
            <span>System</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faEarthAmericas} />
            <span>Web Settings</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCarRear} />
            <span>Pickup Locatin</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Locatin</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faChartPie} flip="horizontal" />
            <span>Reports</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleQuestion} />
            <span>FAQ</span>
          </li>
          <li>
            <Link to="/System Users" style={{textDecoration:'none'}}>
            <FontAwesomeIcon icon={faCircleUser} className="faq" style={{color:'black'}} />
            <span>System Users</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default Sidebar;
