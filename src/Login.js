import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Parse from 'parse/dist/parse.min.js';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import loadingLogo from './assets/loading.gif';

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

const theme = createTheme();

export default function SignInSide() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const doUserLogIn  = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const usernameValue = data.get('email');
    const passwordValue = data.get('password');
    try {
        setIsLoading(true);
        const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
        // logIn returns the corresponding ParseUser object
        navigate("/NewBloodRequest");
        return true;
    } catch (error) {
    // Error can be caused by wrong parameters or lack of Internet connection
    setIsLoading(false);
    alert(`Error! ${error.message}`);
    return false;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Ingreso
            </Typography>
            <Box component="form" noValidate onSubmit={doUserLogIn } sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Ingresar
              </Button>
              {isLoading &&
                    <p align='center'>
                        <img src={loadingLogo} alt="loading..."/>
                    </p>
                }
              <Grid container>
                <Grid item>
                  <Link to="SignUp">
                        No tienes una cuenta? Regístrate
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}