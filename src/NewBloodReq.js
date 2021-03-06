import React, { useState } from 'react';
import Parse from 'parse/dist/parse.min.js';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import BloodRequestForm from './BloodRequestForm';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link to=''>
          Donación de sangre
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



export default function NewBloodReq () { 
    const [currentUser, setCurrentUser] = useState(Parse.User.current());
    const [formData, setformData] = useState({});

    const theme = createTheme();
    const navigate = useNavigate();
    
    const sendBloodDonationRequest = async (event) => {
        console.log(formData.completeName)
        if (
            formData == {} ||
            formData.completeName === 'undefined' ||
            formData.age === 'undefined' ||
            formData.dpi === 'undefined' ||
            formData.bloodType === 'undefined' ||
            formData.priority === 'undefined' ||
            formData.hospital === 'undefined' ||
            formData.units === 'undefined' ||
            formData.units === '0' ||
            formData.completeName === '' ||
            formData.age === '' ||
            formData.dpi === '' ||
            formData.bloodType === '' ||
            formData.priority === '' ||
            formData.hospital === '' ||
            formData.units === ''            
        ) {
            alert('Por favor llene todos los campos');
            return;
        }

        //Create your Parse Object
        const bloodReq = new Parse.Object("BloodRequest");

        bloodReq.set("completeName", formData.completeName);
        bloodReq.set("age", formData.age);
        bloodReq.set("dpi", formData.dpi);
        bloodReq.set("bloodType", formData.bloodType);
        bloodReq.set("priority", formData.priority);
        bloodReq.set("hospital", formData.hospital);
        bloodReq.set("units", formData.units);        
        bloodReq.set("observations", formData.observations);
        bloodReq.set("user", currentUser);
        
        try{
            //Save the Object
            let result = await bloodReq.save()
            alert('Solicitud enviada exitosamente #' + result.id);            
            window.location.reload();
        }catch(error){
            alert('La creación de la solicitud falló, código de error: ' + error.message);
        }
    }

    if (currentUser !== null) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    color="default"
                    elevation={0}
                    sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                    }}
                >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Donación de sangre
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Ingreso de solicitud
                    </Typography>          
                    <BloodRequestForm setformDataFunction={setformData} formData={formData} />
                    <React.Fragment>                
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button
                                variant="contained"
                                onClick={sendBloodDonationRequest}
                                sx={{ mt: 3, ml: 1 }}
                            >
                                Enviar
                            </Button>
                            </Box>            
                    </React.Fragment>
                    </Paper>
                    <Copyright />
                </Container>
            </ThemeProvider>
        )
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