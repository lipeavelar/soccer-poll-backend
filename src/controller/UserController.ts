import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import { User } from '../entity/User'

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const allUsers = await getRepository(User).find()

    return res.json(allUsers)
  }
}

export default new UserController()
