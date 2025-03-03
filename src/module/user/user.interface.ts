export interface IUser {
  name: string
  email: string
  password: string
  role: 'student' | 'tutor'
  userStatus: 'active' | 'inactive'
}
