import plusOne from '../src/plusOne'

describe('plusOne', () => {
  it('should increment the given number by one', () => {
    let number = plusOne(1)
    expect(number).toBe(2)
  })
})
