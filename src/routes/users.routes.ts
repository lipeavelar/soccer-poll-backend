import { Router } from 'express'

import UserController from '../controllers/UserController'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const usersRouter = Router()

// usersRouter.use(ensureAuthenticated)

usersRouter.get('/', ensureAuthenticated, UserController.index)
usersRouter.post('/', UserController.create)

export default usersRouter
