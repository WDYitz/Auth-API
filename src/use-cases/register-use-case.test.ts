import { comparePassword } from "../helpers/bcrypt-password";
import { InMemoryUsersRepository } from "../repositories/inMemory/in-memory-users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";
import { RegisterUseCase } from "./register-user-use-case";

// S.U.T = System Under Test 🧪

let usersRepository: InMemoryUsersRepository;
let sut: RegisterUseCase;

describe('Register use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository();
    sut = new RegisterUseCase(usersRepository);
  });

  it('should hash users password upon registration', async () => {
    const { user } = await sut.execute({ email: 'email_teste@gmail.com', password: '123456' });

    const isPasswordHashed = comparePassword('123456', user.password)

    expect(isPasswordHashed).toBeTruthy();
  });

  it('should not be able to register with the same e-mail twice', async () => {
    const email = 'email_teste@gmail.com';

    await sut.execute({ email, password: '123456' });

    await expect(() => sut.execute({ email, password: '123456' })).rejects.toBeInstanceOf(UserAlreadyExistsError)
  });

  it('should be able to register', async () => {
    const { user } = await sut.execute({ email: 'email_teste@gmail.com', password: '123456' });

    const hashedPassword = await comparePassword('123456', user.password)

    // it should verify if the user contains Id, FIX !!!
    expect(user.email).toBe('email_teste@gmail.com');
    expect(hashedPassword).toBeTruthy();
  });
});