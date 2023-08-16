import { calculateComplexity, toUpperCaseWithCallback } from "../utils/doubles"


describe.only('Doubles test suite', () => {


  describe('Testing using Jest mocks', () => {
    const callBackMockFn = jest.fn()

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('calls callback for invalid argument - track calls', () => {
      const actual = toUpperCaseWithCallback('', callBackMockFn)
      expect(actual).toBeUndefined()
      expect(callBackMockFn).toBeCalledWith('Invalid argument')
      expect(callBackMockFn).toBeCalledTimes(1)
    })

    it('calls callback for valid argument - track calls', () => {
      const actual = toUpperCaseWithCallback('abc', callBackMockFn)
      expect(actual).toBe('ABC')
      expect(callBackMockFn).toBeCalledWith('Called function with: abc')
      expect(callBackMockFn).toBeCalledTimes(1)
    })
  })



  it('Calculates complexity', () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: '',
        field2: '',
      }
    }

    const actual = calculateComplexity(someInfo as any) // stub
    expect(actual).toBe(10)
  })

  it('toUpperCase - calls callback for invalid arguments', () => {
    const actual = toUpperCaseWithCallback('', () => { }) //Fakes
    expect(actual).toBeUndefined()
  })

  it('toUpperCase - calls callback for valid arguments', () => {
    const actual = toUpperCaseWithCallback('abc', () => { }) //Fakes
    expect(actual).toBe('ABC')
  })
})