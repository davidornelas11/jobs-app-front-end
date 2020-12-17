import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CodeIcon from '@material-ui/icons/Code'
import WebIcon from '@material-ui/icons/Web';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction rel='noopener' href='https://github.com/davidornelas11/jobs-app-front-end' label="Github" icon={<CodeIcon />} />
      <BottomNavigationAction href='https://www.facebook.com' label="Portfolio Website" icon={<WebIcon />} />
    </BottomNavigation>
  );
}