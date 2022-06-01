//create the userRouter and its endpoints
const express=require("express");
const {createUser,loginUser,getAllUsers}=require("../controllers/user");
const {authentication}=require("../middlewares/authentication");

const userRouter=express.Router();

//endpoint for POST request ==> http://localhost:5000/user ==> createUser
userRouter.post("/",createUser);

//endpoint for POST request ==> http://localhost:5000/user/login ==>loginUser
userRouter.post("/login",loginUser);

//endpoint for get request ==> http://localhost:5000/user ==>getAllUsers
userRouter.get("/",getAllUsers);

module.exports=userRouter;
