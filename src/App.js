import {DatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {TextField} from "@mui/material";
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value={new Date()}
                        InputAdornmentProps={{
                            classes: {root: 'iconButton'}
                        }}
                        inputFormat={'MM/dd/yyyy'}
                        onChange={onChange.bind(this)}
                        renderInput={(params) => <TextField id="mydate" {...params} />}
                    />
                </LocalizationProvider>
            </header>
        </div>
    );
}

function onChange(date: Date) {
    console.log("something changed", date);
}

export default App;
