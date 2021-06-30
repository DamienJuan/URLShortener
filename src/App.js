import './App.css';
import React, { useState } from 'react'
import Header from './Header';
import Footer from './Footer';
import Jokes from './Bitly';

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import SaveIcon from '@material-ui/icons/Save'
import ShortTextIcon from '@material-ui/icons/ShortText'
import logo from './powered_bitly.png';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, yellow } from '@material-ui/core/colors'
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[900],
    },
    secondary: {
      main: yellow[500],
    }
  }
})

function CheckboxExample () {
  const [checked, setChecked] = useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<SaveIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Save URLs"
    />
  )
}


function App() {
  const [buttonText, setButtonText] = useState("SHORTEN");
  const changeText = (text) => setButtonText(text);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Header/>
          <img src={logo} alt="Logo" />
          <TextField
            required id="standard-required"
            label="Required"
            placeholder="Link to shorten"
            variant="outlined"
            type="link"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" size="large">
            <Button
            startIcon={<ShortTextIcon />}
            color="primary"
            onClick={() => changeText("COPY")}>
              {buttonText}
            </Button>
          </ButtonGroup>
          <Jokes/>
        </header>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
