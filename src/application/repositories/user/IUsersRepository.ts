import { ICreateUserDTO } from '../../dtos/user/ICreateUserDTO'
import { User } from '../../entities/user/User'

export interface IUsersRepository {
  create({ user, password, name, role }: ICreateUserDTO): Promise<User>
}
