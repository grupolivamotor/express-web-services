import MyCrypto from '../../src/util/crypto'

describe('test for MyCryptoClass', () => {
  test('Method encryptSignature should return equal string', () => {
    const expected = MyCrypto.encryptSignature('any_string', 'any_string')
    const result = MyCrypto.encryptSignature('any_string', 'any_string')
    expect(result).toBe(expected)
  })

  test('Method encryptSignature should return not equal string', () => {
    const expected = MyCrypto.encryptSignature('any_string', 'any_string')
    const result = MyCrypto.encryptSignature('other_string', 'any_string')
    expect(result).not.toBe(expected)
  })
})
