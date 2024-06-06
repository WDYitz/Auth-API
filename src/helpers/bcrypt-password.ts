import bcrypt from 'bcrypt'

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}

export const encryptPassword = (password: string, salt: number) => {
  return bcrypt.hashSync(password, salt)
}