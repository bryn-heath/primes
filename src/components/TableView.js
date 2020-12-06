import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'arial',
  },
  paper: {
    width: 30,
    padding: 4,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  infoText: {
    paddingTop: 45,
    fontSize: 16,
    fontFamily: 'arial',
  },
}));

const TableView = ({ inputNumber, tableArray }) => {
  const classes = useStyles();
  let tableArrayFlat = tableArray.flat();

  function BuildPrimeGrid() {
    const finalBuild = [];
    let eachRow = [];

    for (let i = 0; i < tableArrayFlat.length; i++) {
      eachRow.push(
        <Grid key={i} item xs={'auto'}>
          <Paper className={classes.paper}>{tableArrayFlat[i]}</Paper>
        </Grid>
      );

      if ((1 + i) % (inputNumber + 1) === 0) {
        finalBuild.push(
          <Grid container item xs={'auto'} spacing={2} direction={'row'}>
            {eachRow.map((ea) => ea)}
          </Grid>
        );
        eachRow = [];
      }
    }

    return <>{finalBuild.map((ea) => ea)}</>;
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {BuildPrimeGrid()}
      </Grid>
    </div>
  );
};
export default TableView;
