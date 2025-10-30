import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userRouter = Router();


userRouter.get('/', getUsers);

userRouter.get('/:id',authorize, getUser);

userRouter.post('/',(req, res) => res.send({title: 'CREATE new user Endpoint'}));

userRouter.put('/:id',(req, res) => res.send({title: 'UPDATE user by ID Endpoint'}));

userRouter.delete('/:id',(req, res) => res.send({title: 'DELETE user by ID Endpoint'}));

export default userRouter;