import { AuthenticationParams } from "../usercases/authentication";
import { faker } from "@faker-js/faker";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})