import { Router } from 'express'

import createUserController from './index'

const usersRoutes = Router()

usersRoutes.post('/', (request, response) => {
    const { connection } = request.body
    
    return createUserController(connection).handle(request, response)
})

export { usersRoutes }
