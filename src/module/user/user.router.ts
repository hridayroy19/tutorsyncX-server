import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/create-user', userController.createUser)
userRouter.get('/:userId', userController.getSingleUser)
userRouter.put('/:userId', userController.updateUser)
userRouter.get('/', userController.getUser)

export default userRouter
