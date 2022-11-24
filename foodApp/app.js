const express= require('express');
const app= express();
const cookieParser = require("cookie-parser");
// const mongoose= require('mongoose');
// const {db_link}=require('./secrets')
app.use(express.json());
app.use(cookieParser());
// let user = [
//   {
//     id: 1,
//     name: "Abhishek",
//     age: 100,
//   },
//   {
//     id: 2,
//     name: "Rajat",
//     age: 10,
//   },
//   {
//     id: 3,
//     name: "Sunjyot",
//     age: 50,
//   },
// ];

const userRouter = require('./Routers/userRouter');
const authRouter = require('./Routers/authRouter');
app.use("/user", userRouter);
app.use("/auth", authRouter);

// userRouter
//   .route("/")
//   //   .get(middleware1,getUser,middleware2)
//   .get(middleware1,getUser)
//   .post(postUser)
//   .patch(updateUser)
//   .delete(deleteUser);

// userRouter.route("/:name").get(getUserById);

// authRouter.route("/signup").get(getSignup).post(postSignup);
// //with query
// // app.get('/user', )

// // app.post('/user', );

// // app.patch('/user', );

// // app.delete('/user', )

// //params
// // app.get('/user/:name', );
// function middleware1(req,res,next) {
//     console.log("midleware 1 called");
//     next();
// }

// // function middleware2(req,res) {
// //     console.log("midleware 2 called");
// //     res.json({ msg: "user returned" })
// // }

// async function getUser(req, res) {
//   console.log(req.query);
//   let { name, age } = req.query;
//   // let filteredData=user.filter(userObj => {
//   //     return (userObj.name==name && userObj.age==age)
//   // })
//   // res.send(filteredData);
// //   res.send(user);
// let allUsers=await userModel.findOne({name:"Abhishek"} )


// res.json({ msg: "users retrieved", allUsers });
// console.log("getUser called");
// next();
// }
app.listen(5000);

// mongoose.connect(db_link)
//  .then(function(db){
//    console.log("db connected");
// })
// .catch(function(err){
//     console.log(err);
// })

// const userSchema= mongoose.Schema({
//   name:{
//     type:String,
//     required:true,
//   },
//   email:{
//     type:String,
//     required:true,
//     unique:true,
//   },
//   password:{
//     type:String,
//     required:true,
//     minLength:7,
//   },
//   confirmPassword:{
//     type:String,
//     required:true,
//     minLength:7,
//   }
// })

// // models
// const userModel= mongoose.model("userModel",userSchema);

// (async function createUser(){
//   let user={
//     name:"henry",
//     email:"hen@gmail.com",
//     password:"12345688",
//     confirmPassword:"12345688"
//   };
//   let data= await userModel.create(user);
//   console.log(data);
// })();