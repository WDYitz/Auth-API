export class UsersNotFound extends Error {
  constructor() {
    super('Nenhum usuário encontrado.');
  }
}