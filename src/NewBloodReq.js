import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

export default function NewBloodReq () { 
    const [currentUser, setCurrentUser] = useState(Parse.User.current());
    const theme = createTheme();
    const navigate = useNavigate();
    
    if (currentUser !== null) {
        return (
            <div>
            <h1>New Blood Request</h1>
            </div>
        );
    } else { 
        return (
            <ThemeProvider theme={theme}>
                <Typography component="h1" variant="h5" align='center'>
                    Debes iniciar sesión para poder realizar una solicitud de donación de sangre.
                </Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={() => navigate("/")}
                >
                    Regresar al inicio.
                </Button>
            </ThemeProvider>
        );
    }
};