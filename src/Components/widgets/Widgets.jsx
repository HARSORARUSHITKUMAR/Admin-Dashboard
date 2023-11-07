import React from 'react'
import './Widgets.scss'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';

const Widgets = ({ type }) => {
  let data; 

  //temporary
  const amount = 100;
  const diff = 20;

  switch(type){
    case "orders":
      data = {
        title : "ORDERS",
        isMoney : false,
        link : "See All Orders",
        icon : 
        <ShoppingCartOutlinedIcon 
          className='icon'
          style={{
            color:"goldenrod",
            backgroundColor:"rgba(128,165,32,0.2)",
          }}
          />,
          
      };
      break;
      case "new sign up":
      data = {
        title : "NEW SIGN UP",
        isMoney : false,
        link : "View All Sign Up",
        icon : 
        <GroupAddOutlinedIcon 
        className='icon'
        style={{
          color:"crimson",
          backgroundColor:"rgba(255,0,0,0.2)",
        }}
        />,
      };
      break;
      case "delivery boys":
      data = {
        title : "DELIVERY BOYS",
        isMoney : true,
        link : "View Delivey",
        icon : 
          <GroupsOutlinedIcon 
          className='icon'
          style={{
            color:"green",
            backgroundColor:"rgba(0,128,0,0.2)",
          }}
          />,
      };
      break;
      case "products":
      data = {
        title : "PRODUCTS",
        isMoney : true,
        link : "See Details",
        icon : 
          <AutoAwesomeMotionOutlinedIcon 
          className='icon'
          style={{
            color:"purple",
            backgroundColor:"rgba(128,0,128,0.2)",
          }}
          />,
      };
      break;
      default:
      break;
  }




  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney}
          {amount}
          </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <ExpandLessIcon />
          {diff} %
          </div>
          {data.icon}
      </div>
    </div>
  )
}

export default Widgets;
