import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SideDrawer from './SideDrawer';

const navLinks = [
    { title: `Search Indeed`, path: `https://www.indeed.com/jobs?q=&l=`},
    { title: `Search Glassdoor`, path: `https://www.glassdoor.com/`}
  ];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#2196f3' }} position="static">
        <Toolbar>
          <SideDrawer navLinks={navLinks} />
          <Typography variant="h6" className={classes.title}>
            Useful Links
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}