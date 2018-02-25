import { mockify } from './memefy'

describe('mockify', () => {
  const originalText = 'originalText with spaces'
  const originalLength = originalText.length
  let alteredText

  beforeEach(() => {
    alteredText = mockify(originalText)
  })

  it('preserves the order of the original string', () => {
    expect(alteredText.toLowerCase()).toEqual(originalText.toLowerCase())
  })

  it('has at least a third of the letters in uppercase', () => {
    expect(getRatioOfUppercaseLetters() >= 0.33).toEqual(true)
  })

  it('has at most half the letters in uppercase', () => {
    expect(getRatioOfUppercaseLetters() <= 0.50).toEqual(true)
  })

  function getRatioOfUppercaseLetters() {
    return countUppercaseLetters(alteredText) / originalLength
  }

  function countUppercaseLetters(string) {
    let count = 0

    string.split('').forEach(c => {
      if(c === c.toUpperCase()) count+=1
    })

    return count
  }
})
