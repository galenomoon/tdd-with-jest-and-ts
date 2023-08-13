import { PasswordChecker } from "../utils/passwordChecker"

describe("PasswordChecker test suite", () => {
  describe.only('Check if the password is NOT valid', () => {
    const sut = new PasswordChecker()

    const expectedErrors = [
      { condition: '8 characters in your password', password: '1234567' },
      { condition: '1 upper case letter in your password', password: 'apollo11' },
      { condition: '1 lower case letter in your password', password: 'APOLLO11' },
    ]

    it.each(expectedErrors)("Should throw error if you don't have at least $condition - password: $password", ({ condition, password }) => {
      const actual = () => sut.checkPassword(password)
      const expectedError = `You must have at least ${condition}`
      expect(actual).toThrowError(expectedError)
    })
  })
})