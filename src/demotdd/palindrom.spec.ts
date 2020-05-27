import {checkForPalindrom} from "./palindrom";

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
