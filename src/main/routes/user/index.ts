import { UsersRepository } from '../../../application/repositories/user/implementations/UsersRepository'
import { CreateUserUseCase } from '../../../application/use-cases/user/CreateUserUseCase'
import { CreateUserController } from '../../../presentation/controllers/user/CreateUserController'

export default (connection: string): CreateUserController => {
  const userRepository = new UsersRepository(connection)

  const createUserUseCase = new CreateUserUseCase(userRepository)  

  const createUserController = new CreateUserController(createUserUseCase)

  return createUserController
}
