import {generatePrimeFactors} from "./primeFactors";

describe('Prime Factors generation', () => {

    it('should generate prime factors of a given number', () => {
        expectPrimeFactors(1);
        expectPrimeFactors(2, 2);
        expectPrimeFactors(3, 3);
        expectPrimeFactors(4, 2, 2);
        expectPrimeFactors(6, 2, 3);
        expectPrimeFactors(8, 2, 2, 2);
        expectPrimeFactors(9, 3, 3);
        expectPrimeFactors(9, 3, 3);
        expectPrimeFactors(637373765,  5, 7, 1559, 11681);
    });

});

const expectPrimeFactors = (n: number, ...primeFactors: number[]) =>
    expect(generatePrimeFactors(n)).toEqual(primeFactors);