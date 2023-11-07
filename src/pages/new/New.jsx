import React, { useState } from "react";
import "./New.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const New = () => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <div className="formInput">
                <label>User Name:</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="formInput">
                <label>First Name and Last Name:</label>
                <input type="text" placeholder="First Name  Last Name" />
              </div>
              <div className="formInput">
                <label>Email:</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="formInput">
                <label>Phone No:</label>
                <input type="text" placeholder="+91 Phone Number" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Address" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <div className="formInput">
                <label>Password:</label>
                <input type="password" placeholder="Password" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
