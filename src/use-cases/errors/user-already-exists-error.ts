export class UserAlreadyExistsError extends Error {
  constructor() {
    super('Usuário já existe ou e-mail já esta sendo utilizado.')
  }
}