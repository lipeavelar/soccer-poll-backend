import { Router } from 'express'

import UserController from '../controllers/UserController'

const usersRouter = Router()

usersRouter.get('/', UserController.index)
usersRouter.post('/', UserController.create)

export default usersRouter
