import { Request, Response, Router } from 'express'
import { userController } from './user.controller'
import User from './user.model'

const userRouter = Router()

userRouter.post('/create-user', userController.createUser)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put("/:email", userController.updateUser);
userRouter.get('/', userController.getUser)



export default userRouter
