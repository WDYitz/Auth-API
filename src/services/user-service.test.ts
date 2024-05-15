/* import { User } from "@prisma/client";
import { db } from "../libs/prisma";
import { getUserByEmail, createUser, getAllUsers } from "./user-service";

describe("testing user service", () => {

  const email = 'testing@gmail.com';
  const password = 'testing123';

  beforeAll(async () => {
    await db.$connect();
  })

  afterAll(async () => {
    await db.$disconnect();
  })

  it('should create new user', async () => {
    const newUser = await createUser({
      data: {
        email,
        password
      }
    }) as User;

    expect(newUser).toBe({ email, password });
  })

  it('should return a user by email', async () => {
    const user = await getUserByEmail(email);
    expect(user?.email).toBe(email);
  });

  it('should return all users', async () => {
    const users = await getAllUsers();
    expect(users).toBeInstanceOf(Array<User>());
  });

}); */


// CREATE NEW DATABASE FOR TESTING PURPOSES
// IT IS NOT RECOMMENDED TO USE THE SAME DATABASE FOR TESTING AND PRODUCTION