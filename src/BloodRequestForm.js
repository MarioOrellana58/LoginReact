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

export default function BloodRquestForm ({setformDataFunction, formData}) { 
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
                value={formData.completeName}
                fullWidth
                variant="standard"
                onChange = {(event) => setformDataFunction({...formData, completeName: event.target.value})}
                inputProps={{ maxLength: 100 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="age"
                name="age"
                label="Edad"
                value={formData.age}
                fullWidth
                variant="standard"
                onChange = {(event) => setformDataFunction({...formData, age: event.target.value})}
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
                value={formData.dpi}
                fullWidth
                variant="standard"
                onChange = {(event) => setformDataFunction({...formData, dpi: event.target.value})}
                type="number"
                inputProps={{ maxLength: 15 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <InputLabel id="bloodTypeLbl">Tipo de sangre</InputLabel>
                    <Select
                        labelId="bloodTypeLbl"
                        id="bloodType"
                        value={formData.bloodType}
                        label="Tipo de sangre *"
                        fullWidth
                        onChange = {(event) => setformDataFunction({...formData, bloodType: event.target.value})}
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
                    value={formData.priority}
                    label="Prioridad *"
                    fullWidth
                    onChange = {(event) => setformDataFunction({...formData, priority: event.target.value})}
                    renderInput={(params) => <TextField {...params} label="Seleccione hospital" />}
                >
                    <MenuItem value="Alta">Alta</MenuItem>
                    <MenuItem value="Media">Media</MenuItem>
                    <MenuItem value="Baja">Baja</MenuItem>
                </Select>   
            </Grid>

            <Grid item xs={12} sm={6}>
                <Autocomplete
                    disablePortal
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    options={hospitals}
                    fullWidth
                    onChange = {(event) => setformDataFunction({...formData, hospital: event.target.value})}
                    renderInput={(params) => <TextField {...params} label="Seleccione hospital" />}
                />                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="units"
                    name="units"
                    label="Unidades (L)"
                    value={formData.units}
                    fullWidth
                    type="number"
                    onChange = {(event) => setformDataFunction({...formData, units: event.target.value})}
                    inputProps={{ maxLength: 2 }}
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id='observations'
                name='observations'
                label="Observaciones y/o requerimientos especiales"
                value={formData.observations}
                multiline
                fullWidth
                rows={4}
                onChange = {(event) => setformDataFunction({...formData, observations: event.target.value})}
                inputProps={{ maxLength: 1000 }}
                />
            </Grid>
          </Grid>
        </React.Fragment>
      ); 
}