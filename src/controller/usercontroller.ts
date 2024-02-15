import { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config(); 

export const user = async(req:Request,res:Response)=>{
    try {
        res.render('index')
    } catch (error) {
        console.log(error);
    }
}

export const userPost = async(req:Request,res:Response)=>{
    try {
        const {email,pass} = req.body;
        if(email==process.env.gmail && pass == process.env.password){
            res.redirect('/home')
        }else{
            res.render("index",{message:"password is wrong"})
        }
    } catch (error) {
        console.log(error);
    }
}

export const home = async(req:Request,res:Response)=>{
    try {
        res.render('home')
    } catch (error) {
        console.log(error);
    }
}