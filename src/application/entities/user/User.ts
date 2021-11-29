import { randomUUID } from 'crypto'

export class User {
  id?: string
  user: number
  password: string
  name: string
  role: number
  created_at: Date
  updated_at: Date

  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
