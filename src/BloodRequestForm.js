import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';

export default function BloodRquestForm () { 
    const hospitals = [ 
        {label: 'Hospital 1', value: 'Hospital 1'},
        {label: 'Hospital 2', value: 'Hospital 2'},
        {label: 'Hospital 3', value: 'Hospital 3'},
        {label: 'Hospital 4', value: 'Hospital 4'},
        {label: 'Hospital 5', value: 'Hospital 5'},
        {label: 'Hospital 6', value: 'Hospital 6'},
    ]
    return (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="completeName"
                name="completeName"
                label="Nombre"
                fullWidth
                variant="standard"
                inputProps={{ maxLength: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="age"
                name="age"
                label="Edad"
                fullWidth
                variant="standard"
                type="number"
                inputProps={{ maxLength: 3 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="dpi"
                name="dpi"
                label="DPI"
                fullWidth
                variant="standard"
                type="number"
                onChange={(event) => { console.log(event.target.value) }}
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <InputLabel id="bloodTypeLbl">Tipo de sangre</InputLabel>
                    <Select
                        labelId="bloodTypeLbl"
                        id="bloodType"
                        value=""
                        label="Tipo de sangre *"
                        fullWidth
                        onChange={(event) => { console.log(event.target.value) }}
                    >
                        <MenuItem value="O+">O+</MenuItem>
                        <MenuItem value="O-">O-</MenuItem>
                        <MenuItem value="A+">A+</MenuItem>
                        <MenuItem value="A-">A-</MenuItem>
                        <MenuItem value="B+">B+</MenuItem>
                        <MenuItem value="B-">B-</MenuItem>
                        <MenuItem value="AB+">AB+</MenuItem>
                        <MenuItem value="AB-">AB-</MenuItem>
                    </Select>         
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel id="priorityLbl">Prioridad</InputLabel>
                <Select
                    labelId="priorityLbl"
                    id="priority"
                    value=""
                    label="Prioridad *"
                    fullWidth
                    onChange={(event) => { console.log(event.target.value) }}
                >
                    <MenuItem value="Alta">Alta</MenuItem>
                    <MenuItem value="Media">Media</MenuItem>
                    <MenuItem value="Baja">Baja</MenuItem>
                </Select>   
            </Grid>

            <Grid item xs={12} sm={6}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={hospitals}
                    fullWidth
                    renderInput={(params) => <TextField {...params} label="Seleccione hospital" />}
                />                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="units"
                    name="units"
                    label="Unidades (L)"
                    fullWidth
                    type="number"
                    inputProps={{ maxLength: 2 }}
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                label="Observaciones y/o requerimientos especiales"
                multiline
                fullWidth
                rows={4}
                maxRows={6}
                inputProps={{ maxLength: 1000 }}
                />
            </Grid>
          </Grid>
        </React.Fragment>
      ); 
}