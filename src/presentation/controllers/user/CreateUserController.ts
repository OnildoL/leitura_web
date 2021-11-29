import { Request, Response } from 'express'
import { CreateUserUseCase } from '../../../application/use-cases/user/CreateUserUseCase'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { user, password, name, role } = request.body

      const newUser = await this.createUserUseCase.execute({ user, password, name, role })
  
      return response.status(201).json(newUser)
    } catch {
      return response.status(400).send()
    }
  }
}
