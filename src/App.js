import './App.css';
import React, { useState } from 'react'

import Header from './Header';
import Footer from './Footer';

import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import SaveIcon from '@material-ui/icons/Save'
import ShortTextIcon from '@material-ui/icons/ShortText'
import logo from './powered_bitly.png';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, yellow } from '@material-ui/core/colors'
import 'fontsource-roboto';

const BitlyClient = require('bitly').BitlyClient;
const bitly = new BitlyClient(''); //Your bitly API key

bitly
  .shorten("") //url to shorten
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });

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

function CheckboxOne () {
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

function UrlTextArea () {
  return (
    <TextField
      required id="standard-required"
      label="Required"
      placeholder="Link to shorten"
      variant="outlined"
      type="link"
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
          <UrlTextArea />
          <CheckboxOne />
          <Button
            variant="contained"
            size="large"
            startIcon={<ShortTextIcon />}
            color="primary"
            onClick={() => changeText("COPY")}>
              {buttonText}
          </Button>
        </header>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;