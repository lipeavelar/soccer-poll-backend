import { getRepository } from 'typeorm'
import User from '../../entities/User'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import * as dotenv from 'dotenv'

interface AuthenticationRequest {
  email: string
  password: string
}

interface AuthenticationResponse {
  user: User
  token: string
}

class AuthenticateUserService {
  public async execute({ email, password }: AuthenticationRequest): Promise<AuthenticationResponse> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({
      where: { email }
    })

    if (!user) {
      throw new Error('Incorrect user or password')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Incorrect user or password')
    }

    dotenv.config()

    const token = sign({}, process.env.APP_SECRET ?? '', {
      subject: user.id.toString(),
      expiresIn: '2h'
    })

    return { user, token }
  }
}

export default AuthenticateUserService
