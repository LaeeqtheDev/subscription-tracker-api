import { Router } from "express";
import { getUser, getUsers } from "../../config/controllers/user.controller.js";


const userRouter = Router();


userRouter.get('/', getUsers);

userRouter.get('/:id', getUser);

userRouter.post('/',(req, res) => res.send({title: 'CREATE new user Endpoint'}));

userRouter.put('/:id',(req, res) => res.send({title: 'UPDATE user by ID Endpoint'}));

userRouter.delete('/:id',(req, res) => res.send({title: 'DELETE user by ID Endpoint'}));

export default userRouter;