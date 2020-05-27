describe('Palindrom checker', () => {
    it('should check whether a string is a palindrom', () => {

        expect(checkForPalindrom('a')).toBeTruthy();
        expect(checkForPalindrom('ab')).toBeFalsy();
        expect(checkForPalindrom('aa')).toBeTruthy();
        expect(checkForPalindrom('aba')).toBeTruthy();
        expect(checkForPalindrom('abc')).toBeFalsy();
        expect(checkForPalindrom('abca')).toBeFalsy();
        expect(checkForPalindrom('abbc')).toBeFalsy();
    });

});

const checkForPalindrom = (str: string) =>
    str.split('').reduce((acc, s, i) =>
        acc && areSymmetricalCharactersEqual(str, i), true);

const areSymmetricalCharactersEqual = (str: string, i: number) => {
    return str.charAt(i) === str.charAt(str.length - 1 - i);
};
