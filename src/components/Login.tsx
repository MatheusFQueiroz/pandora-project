'use client'
import { FormControl, InputLabel, TextField, Button, createTheme, ThemeProvider } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";
import { purple } from "@mui/material/colors";

export function Login () {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
      const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    
    const theme = createTheme ({
        palette: {
            primary: {
                main: purple[500]
            }
        }
    })

    return (
        <div className="flex flex-col py-20 items-center">
            <ThemeProvider theme={theme}>
                <TextField
                className="w-72 shadow-2xl"
                label = "E-mail"
                variant="outlined"
                size="small"
                color="primary"
                />
            </ThemeProvider>

            <ThemeProvider theme={theme}>
                <FormControl variant="outlined" className="shadow-2xl mt-6" size="small">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                    className="w-72"
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Senha"
                    color="primary"
                    />
                </FormControl>
            </ThemeProvider>

            <Button variant="contained" className="mt-8 w-52 bg-purple-900 cursor-pointer shadow-2xl">Entrar</Button>
        </div>
    )
}