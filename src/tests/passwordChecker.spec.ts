import { PasswordChecker } from "../utils/passwordChecker"

describe("PasswordChecker test suite", () => {
  let sut: PasswordChecker

  const cases = [
    { condition: '8 characters in your password', password: '1234567' },
    { condition: '1 upper case letter in your password', password: 'apollo11' },
    { condition: '1 lower case letter in your password', password: 'APOLLO11' },
  ]

  describe('Check if the password IS NOT VALID', () => {
    beforeEach(() => { sut = new PasswordChecker() })
    it.each(cases)("Should throw error if you don't have at least $condition", ({ condition, password }) => {
      const actual = () => sut.checkPassword(password)
      const expectedError = `You must have at least ${condition}`
      expect(actual).toThrowError(expectedError)
    })
  })

  describe('Check if the password IS VALID', () => {
    sut = new PasswordChecker()
    it("Should pass if you have at least more than 8 characters, 1 upper case letter and 1 lower case letter in your password", () => {
      const actual = sut.checkPassword('Apollo11')
      const expected = "Your password is valid!"
      expect(actual).toEqual(expected)
    })
  })
})