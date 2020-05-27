export const generatePrimeFactors = (n: number) => {
    let primeFactors: number[] = [];
    for (let candidate: number = 2; n > 1; candidate++)
        for (; n % candidate == 0; n /= candidate)
            primeFactors.push(candidate);
    return primeFactors;
};