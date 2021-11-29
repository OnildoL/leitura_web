import { User } from '../../entities/user/User'
import { IUsersRepository } from '../../repositories/user/IUsersRepository'

interface IRequest {
  user: number
  password: string
  name: string
  role: number
}

export class CreateUserUseCase {
  constructor(private createUserUseCase: IUsersRepository) {}

  async execute({ user, password, name, role }:IRequest): Promise<User> {
    const newUser = await this.createUserUseCase.create({ user, password, name, role })

    return newUser
  }
}