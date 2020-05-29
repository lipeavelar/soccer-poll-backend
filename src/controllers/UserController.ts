import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import User from '../entities/User'
import CreateUserService from '../services/Users/CreateUserService'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const allUsers = await getRepository(User).find()
    return res.json(allUsers)
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, password, email, type }: User = req.body

      const createUser = new CreateUserService()

      const user = await createUser.execute({ name, password, email, type })

      return res.json(user)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

export default new UserController()
