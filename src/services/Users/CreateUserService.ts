import User, { UserType } from '../../entities/User'
import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface CreateUserRequest {
  name: string
  email: string
  password: string
  type: UserType
}

class CreateUserService {
  public async execute({ name, email, password, type = UserType.DEFAULT }: CreateUserRequest): Promise<User> {
    const usersRepo = getRepository(User)

    const checkUsersExists = await usersRepo.findOne({
      where: { email }
    })

    if (checkUsersExists) {
      throw new Error('Email address already used.')
    }

    const hasedPassword = await hash(password, 8)

    const user = usersRepo.create({ name, email, password: hasedPassword, type })

    await usersRepo.save(user)

    delete user.password

    return user
  }
}

export default CreateUserService
