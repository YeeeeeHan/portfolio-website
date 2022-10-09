import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme();


export default function SignInSide() {
    // Populate with sample data
    const sampleRows = [""]
    const [rows, setRows] = useState(sampleRows)


    // Called when submit button is clicked
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);


        const data = formData.get('address')
        setRows(oldRows => [...oldRows, data])

    };


    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{height: '100vh'}}>
                <CssBaseline/>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Destination address"
                        name="address"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label={rows}
                        name="address"
                        autoFocus
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Send Tokens
                    </Button>
                    <Grid container>
                    </Grid>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}