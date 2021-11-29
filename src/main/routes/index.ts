import { Router } from 'express'
import { usersRoutes } from './user/usersRoutes'

const router = Router()

router.use('/users', usersRoutes)

export { router }
