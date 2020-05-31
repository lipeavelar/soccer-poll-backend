import { Request, Response } from 'express'
import AuthenticateUserService from '../services/Sessions/AuthenticateUserService'

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body

      const authUser = new AuthenticateUserService()

      const { user, token } = await authUser.execute({ email, password })
      delete user.password

      return res.json({ user, token })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new UserController()
