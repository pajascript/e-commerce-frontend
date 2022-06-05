import { Container } from "./ProfileElements";
import Navbar from "../../components/Navbar";
import Announcement from "../../components/Announcement";
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./profile.css";
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PersonalVideo,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { updateUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import axios from "axios";

const Profile = () => {

    const user = useSelector(state => state.user.currentUser);
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        updateUser(user._id, inputs, dispatch);
        alert("Profile Updated Successfully");
        window.location.reload();
    }

    const handleChange = (e) => {
        setInputs(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    };

  return (
    <Container>
        <Navbar />
        <Announcement />
        <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Profile</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{ user.firstname + " " + user.lastname }</span>
              <span className="userShowUserTitle">{user.isAdmin ? "Admin" : "Customer"}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <div className="userShowTitle">Join Date</div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{user.createdAt}</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">09304677156</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Hillcrest Village</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Profile</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  name="username"
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>First Name</label>
                <input
                  name="firstname"
                  type="text"
                  placeholder={user.firstname}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Last Name</label>
                <input
                  name="lastname"
                  type="text"
                  placeholder={user.lastname}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  name="email"
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Caloocan City"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <button className="userUpdateButton" onClick={handleClick} >Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </Container>
  )
}

export default Profile;