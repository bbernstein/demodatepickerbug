import * as React from 'react';
import {DatePicker} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {TextField} from "@mui/material";
import './App.css';

function App() {
    const style = {
        backgroundColor: '#ffffff',
        margin: '20px'
    }
    const [value, setValue] = React.useState(null);
    return (
        <div className="App">
            <body className="App-body">
            <div style={style}>
                <div>MUI DatePicker</div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        value={value}
                        inputFormat={'MM/dd/yyyy'}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField id="datePicker" {...params} />}
                    />
                </LocalizationProvider>
            </div>
            <div style={style}>
                <div>Native TextField Picker (type=date)</div>
                <TextField
                    id='nativePicker'
                    type="date"
                    inputFormat={'MM/dd/yyyy'}
                    defaultValue={(new Date()).toISOString().substring(0,10)}
                />
            </div>
            </body>
        </div>
    );
}

// function onChange(date: Date) {
//     console.log("something changed", date);
// }

export default App;
