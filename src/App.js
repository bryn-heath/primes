const App = () => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }; // helper function, check num === prime number

  const hardCodeNum = 3;

  const buildPrimes = (num) => {
    const setupNumber = num + 1;
    let arr = [0];
    let i = 0;

    do {
      if (isPrime(i)) {
        arr.push(i);
      }
      i++;
    } while (arr.length < setupNumber);
    return arr;
  }; // func build the foundation array of prime numbers for the top row (X)

  const initPrimeArray = buildPrimes(hardCodeNum);

  const buildAllArrays = (array) => {
    let setArray = [];
    for (let r = 0; setArray.length < hardCodeNum + 1; r++) {
      let eachArr = [];
      for (let c = 0; eachArr.length < hardCodeNum + 1; c++) {
        if (r === 0) {
          eachArr.push(1 * array[c]);
        } else {
          eachArr.push(array[r] * array[c]);
        }
        eachArr[0] = array[r];
      }
      setArray.push(eachArr);
    }
    return setArray;
  }; // func to build out the prime numbers X * Y

  const tableArray = buildAllArrays(initPrimeArray);

  console.log(tableArray);
  return (
    <div className="App">
      <p>loadedd</p>
    </div>
  );
};

export default App;
