import { Router } from 'express'

import UserController from '../controller/UserController'

const usersRouter = Router()

usersRouter.get('/', UserController.index)

export default usersRouter
