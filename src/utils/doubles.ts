export type stringInfo = {
  lowerCase: string,
  upperCase: string,
  length: number,
  characters: string[],
  extraInfo: {} | undefined
}

type LoggerServiceCallBack = (agr: string) => void

export function calculateComplexity(stringInfo: stringInfo) {
  return Object.keys(stringInfo.extraInfo).length * stringInfo.length
}

export function toUpperCaseWithCallback(arg: string, callback: LoggerServiceCallBack) {
  if (!arg) {
    callback('Invalid argument')
    return
  }
  callback(`Called function with: ${arg}`)
  return arg.toUpperCase()
}