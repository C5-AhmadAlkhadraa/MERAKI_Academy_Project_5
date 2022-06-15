import React from "react";
import "./homePage.css";
import NavBar from "../../NavBar/NavBar";
import FriendList from "../../FriendList/FriendList";
import Suggested from "../../Suggested/Suggested";
import Adv from "../../Adv/Adv";
import CreatePost from "../../CreatePost/CreatePost";
import ShowPost from "../../ShowPost/ShowPost";
import { useSelector } from "react-redux";
import ModalBox from "../../ModalBox/ModalBox";
import Banner from "../../Banner/Banner";

const HomePage = () => {
  const { userId } = useSelector((state) => {
    return {
      userId: state.user.userId,
    };
  });
  return (
    // <div className="home">
    <>
      <ModalBox />
      <NavBar />
      <Banner />
      <FriendList id={userId} />
      <Suggested />
      <CreatePost />
      <ShowPost type={"home"} />
      <Adv />
    </>
    // </div>
  );
};

export default HomePage;
