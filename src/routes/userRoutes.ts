import express from 'express';
import path from 'path';

const userRoute = express();

import {user,userPost,home} from '../controller/usercontroller'
userRoute.use(express.json());
userRoute.use(express.urlencoded({extended:true}));
userRoute.set('views', path.join(__dirname, '../views'));

userRoute.get('/',user);
userRoute.post('/',userPost)
userRoute.get('/home',home)
export default userRoute;
