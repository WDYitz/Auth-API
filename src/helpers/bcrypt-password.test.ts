/* import { db } from "../libs/prisma";
import { getUserByEmail } from "../services/user-service";
import { decryptPassword } from "./bcrypt-password";

describe("testing password encrypting and decrypting", () => {

  const email = 'testing@gmail.com';
  const password = 'testing123';

  beforeAll(async () => {
    await db.$connect();
  })

  afterAll(async () => {
    await db.$disconnect();
  })

  if('should encrypt the password returning a hashed password', async () => {
    const hashedPassword = await encryptPassword(password, 10);
    expect(hashedPassword).toBe()
  })

  it('should match the password from database', async () => {
    const user = await getUserByEmail(email);
    const match = await decryptPassword(password, user?.password as string);
    expect(match).toBeTruthy();
  })

  it('should not match the password from database', async () => {
    const user = await getUserByEmail(email);
    const match = await decryptPassword('wrongpassword', user?.password as string);
    expect(match).toBeFalsy();
  })

});  */