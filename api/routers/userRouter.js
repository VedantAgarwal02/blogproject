const express=require('express');
const userRouter = express.Router();
const {signup, login, getProfile, logout} = require('../controllers/userController');

userRouter.route('/signup').post(signup);
userRouter.route('/login').post(login);
userRouter.route('/profile').get(getProfile);
userRouter.route('/logout').post(logout);

module.exports = userRouter;