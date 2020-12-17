import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Chart from './Chart'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Form() {
  const classes = useStyles();
  const [language, setLanguage] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setLanguage(event.target.value)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  

  return (
    <>
    <Chart language={language}/>
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        select language
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={language}
          onChange={handleChange}
        >
          <MenuItem value={''}><em>NONE</em></MenuItem>
          <MenuItem value={'javascript'}><img src={'https://img.icons8.com/ios-filled/50/000000/javascript-logo.png'} alt='Javascript logo' /></MenuItem>
          <MenuItem value={'python'}><img src={"https://img.icons8.com/dusk/64/000000/python.png"} alt='python logo' /></MenuItem>
          <MenuItem value={'c++'}><img src={"https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"} alt='c plus plus logo' /></MenuItem>
          <MenuItem value={'c#'}><img src={"https://img.icons8.com/ios-filled/50/000000/c-sharp-logo.png"} alt='c sharp logo' /></MenuItem>
          <MenuItem value={'react javascript'}><img src={"https://img.icons8.com/plasticine/100/000000/react.png"} alt='react logo' /></MenuItem>
          <MenuItem value={'java'}><img src={"https://img.icons8.com/dusk/64/000000/java-coffee-cup-logo.png"} alt='Java logo' /></MenuItem>
          <MenuItem value={'visual basic'}><img src={"https://img.icons8.com/ios-filled/50/000000/visual-basic.png"} alt='visual basic logo' /></MenuItem>
        </Select>
      </FormControl>
    </div>
    </>
  );
}