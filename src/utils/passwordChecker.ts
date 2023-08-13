

export class PasswordChecker {
  public checkPassword(str: string): string {
    if (str.length < 8) throw new Error('You must have at least 8 characters in your password')
    if (!/[A-Z]/.test(str)) throw new Error('You must have at least 1 upper case letter in your password')
    if (!/[a-z]/.test(str)) throw new Error('You must have at least 1 lower case letter in your password')
    return "Your password is valid!"
  }
}