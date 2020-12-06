import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TableView from './components/TableView';

const useStyles = makeStyles(() => ({
  mainContainer: {
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLeft: {
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    width: '5vw',
    padding: 20,
  },
  containerRight: {
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
}));

export const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}; // helper function, check num === prime number

export const buildPrimes = (num) => {
  let arr = [0];
  let i = 0;

  do {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  } while (arr.length < num + 1);
  return arr;
}; // func build the foundation array of prime numbers for the top row (X)

export const buildAllArrays = (array, inputNumber) => {
  let setArray = [];
  for (let r = 0; setArray.length < inputNumber + 1; r++) {
    let eachArr = [];
    for (let c = 0; eachArr.length < inputNumber + 1; c++) {
      if (r === 0) {
        eachArr.push(1 * array[c]);
      } else {
        eachArr.push(array[r] * array[c]);
      }
      eachArr[0] = array[r];
    }
    setArray.push(eachArr);
  }

  if (setArray.length > 0) {
    setArray[0][0] = ' ';
    return setArray;
  }

  return setArray;
}; // func to build out the prime numbers X * Y

const App = () => {
  const role = 'userInput';
  const classes = useStyles();
  const [inputNumber, setInputNumber] = useState(0);

  const initPrimeArray = buildPrimes(inputNumber);

  const tableArray = buildAllArrays(initPrimeArray, inputNumber);

  const handleInput = (e) => {
    !isNaN(e.nativeEvent?.data) &&
      setInputNumber(parseInt(e.currentTarget.value));
  };
  //check each input is !NaN - we only want 0-9

  return (
    <div className={classes.mainContainer} data-testid="appTest">
      <div className={classes.containerLeft}>
        <p style={{ fontWeight: 'bold', fontFamily: 'sans-serif' }}>
          Type N below
        </p>
        <input
          role={role}
          type="text"
          value={inputNumber}
          onChange={handleInput}
          style={{ borderWidth: 2, borderRadius: 2, textAlign: 'center' }}
        />
      </div>

      <div className={classes.containerRight}>
        <TableView inputNumber={inputNumber} tableArray={tableArray} />
      </div>
    </div>
  );
};

export default App;
