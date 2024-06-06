import { User } from '@prisma/client';
import { generateJWT } from '../helpers/JWT-token';
import { encryptPassword } from '../helpers/bcrypt-password';
import { UsersRepository } from '../repositories/users-repository';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';

interface RegisterUseCaseRequest {
  email: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ email, password }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const userAlreadyExists = await this.usersRepository.getUserByEmail(email);

    if (userAlreadyExists) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.create(email, encryptPassword(password, 10));
    const token = generateJWT({ email: user.email, password: user.password });

    window.localStorage.setItem('token', token);

    return { user }
  }
}