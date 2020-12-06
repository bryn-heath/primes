import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import TableView from './components/TableView';

const useStyles = makeStyles(() => ({
  mainContainer: {
    margin: 'auto',
    height: '60vh',
    width: '90vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: `translate(${0}, ${25}%)`,
  },
  containerLeft: {
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    width: '20vw',
    padding: 25,
  },
  containerRight: {
    transform: `translate(${0}, ${0}%)`,
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Roboto',
    width: '80vw',
    padding: 25,
  },
}));

const App = () => {
  const classes = useStyles();
  const [inputNumber, setInputNumber] = useState();

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  }; // helper function, check num === prime number

  const buildPrimes = (num) => {
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

  const initPrimeArray = buildPrimes(inputNumber);

  const buildAllArrays = (array) => {
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
    return setArray;
  }; // func to build out the prime numbers X * Y

  const tableArray = buildAllArrays(initPrimeArray);

  const handleInput = (e) => {
    !isNaN(e.nativeEvent?.data) &&
      setInputNumber(parseInt(e.currentTarget.value));
  }; //check each input is !NaN - we only want 0-9

  return (
    <div className={classes.mainContainer}>
      <div className={classes.containerLeft}>
        <p>Type N below</p>
        <input
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
