import { render, screen, fireEvent } from '@testing-library/react';
import App, { isPrime, buildPrimes, buildAllArrays } from './App';

test('the prime function', () => {
  expect(isPrime(5)).toBe(true);
  expect(isPrime(11)).toBeTruthy();
  expect(isPrime(2)).toBe(true);
  expect(isPrime(113)).toBe(true);
  expect(isPrime(18)).toBe(false);
  expect(isPrime(0)).toBeFalsy();
  expect(isPrime(10000000)).toBe(false);
});

test('the build prime function', () => {
  const resultOfThree = [0, 2, 3, 5];
  const N = 3;
  expect(buildPrimes(N)).toEqual(resultOfThree);
  expect(buildPrimes(N)).toHaveLength(N + 1);
  expect(buildPrimes(N)).toEqual(expect.arrayContaining(resultOfThree));
  expect(buildPrimes(7)).not.toEqual(expect(resultOfThree));

  const starterPrimeArray = buildPrimes(N).map((ea) => ea);
  expect(isPrime(starterPrimeArray[0])).toBe(false); // empty string to fit the ui
  expect(isPrime(starterPrimeArray[1])).toBe(true);
  expect(isPrime(starterPrimeArray[2])).toBe(true);
  expect(isPrime(starterPrimeArray[3])).toBe(true);
});

test('the build all arrays function', () => {
  const resultOfThree = [
    [' ', 2, 3, 5],
    [2, 4, 6, 10],
    [3, 6, 9, 15],
    [5, 10, 15, 25],
  ];
  const N = 3;

  expect(buildAllArrays(buildPrimes(N), N)).toEqual(resultOfThree);
  expect(buildAllArrays(buildPrimes(N), N)).toHaveLength(N + 1); // row length check
  buildAllArrays(buildPrimes(N), N).map((ea) => expect(ea).toHaveLength(N + 1)); // column length check
});

test('calculate total rows', async () => {
  const N = 3;
  render(<App />);
  const userInput = await screen.findByRole('userInput');
  fireEvent.change(userInput, { target: { value: N } });
});
