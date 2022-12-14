const express = require("express");
const userRouter = express.Router();
const { getUser, postUser, updateUser, deleteUser, getAllUser} = require("../controller/userController");
const {isAuthorised,protectRoute} = require('../helper');
const { signup, login } = require('../controller/authController');


userRouter
  .route("/:id")
  .patch(updateUser)
  .delete(deleteUser);

userRouter
 .route('/login')
 .post(login);


 userRouter
 .route('/signup')
 .post(signup);


  app.use(protectRoute)
userRouter.route("/userProfile").get(getUser);

// admin specific
//admin specific function
userRouter.use(isAuthorised(['admin']));
userRouter.route('')
.get(getAllUser)


  
module.exports = userRouter;