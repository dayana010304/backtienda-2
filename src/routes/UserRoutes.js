import express from 'express';
import userController from '../controllers/UserController.js'
import User from '../models/UserModel.js';
const userRoutes = express.Router();

userRoutes.post('/login', async (req,res) =>{
    console.log(req.body)
    let data = await userController.login(req.body);
    res.json(data);
})

userRoutes.post('/register', async (req,res) =>{
    console.log(req.body);
    let data = await userController.register(req.body);
    res.json(data);
});

userRoutes.get('/get-users', async (req,res) =>{
    const data = await userController.getUsers();
    res.json({
        data: data,
        totalResults: data.length,
        status: "ok"
    })
})


userRoutes.get('/filter', (req,res) =>{
    res.json({status: "filter"})
})

export default userRoutes;
