import './App.css';
import React from 'react'
import Header from './Header';
import Footer from './Footer';

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import SaveIcon from '@material-ui/icons/Save'
import ReplayIcon from '@material-ui/icons/Replay'
import ShortTextIcon from '@material-ui/icons/ShortText'

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, yellow } from '@material-ui/core/colors'
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: yellow[500],
    }
  }
})

function CheckboxExample () {
  const [checked, setChecked] = React.useState(true)
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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Header/>
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
            color="primary">
              SHORTEN
            </Button>
            <Button
            startIcon={<ReplayIcon />}
            color="secondary">
              CLEAR
            </Button>
          </ButtonGroup>
        </header>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
