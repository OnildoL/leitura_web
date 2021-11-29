import { Connection, getConnection } from 'typeorm'
import { ICreateUserDTO } from '../../../dtos/user/ICreateUserDTO'
import { User } from '../../../entities/user/User'
import { IUsersRepository } from '../IUsersRepository'
import { hash } from 'bcrypt'

export class UsersRepository implements IUsersRepository {
  private connection: Connection

  constructor(connection: string) {
    this.connection = getConnection(connection)
  }

  async create({ user, password, name, role }: ICreateUserDTO): Promise<User> {
    const newUser = new User()
    const passwordHash = await hash(password, 8)

    Object.assign(newUser, { user, password: passwordHash, name, role })
    
    this.connection.createQueryBuilder()
      .insert()
      .into('users')
      .values([{ 
        id: newUser.id, 
        user: newUser.user, 
        password: newUser.password,
        name: newUser.name,
        role: newUser.role
       }])
      .execute()

    return newUser
  }
}
