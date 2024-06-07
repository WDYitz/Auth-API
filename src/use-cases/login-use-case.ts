import { User } from "@prisma/client";
import { generateJWT } from "../helpers/JWT-token";
import { comparePassword } from "../helpers/bcrypt-password";
import { UsersRepository } from "../repositories/users-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface LoginUseCaseRequest {
  email: string;
  password: string;
}

interface LoginUseCaseResponse {
  user: User;
  token: string;
}

export class LoginUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute({ email, password }: LoginUseCaseRequest): Promise<LoginUseCaseResponse> {
    const user = await this.usersRepository.getUserByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new InvalidCredentialsError();
    }

    const token = generateJWT({ id: user.id, email: user.email });

    return { user, token }
  }
}