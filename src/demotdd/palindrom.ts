export const checkForPalindrom = (str: string) =>
  str
    .split('')
    .reduce((acc, s, i) => acc && areSymmetricalCharactersEqual(str, i), true)

const areSymmetricalCharactersEqual = (str: string, i: number) => {
  return str.charAt(i) === str.charAt(str.length - 1 - i)
}
