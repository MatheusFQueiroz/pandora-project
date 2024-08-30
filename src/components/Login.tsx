'use client'
import React, { useState } from "react";
import { FormControl, InputLabel, TextField, createTheme, ThemeProvider } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { purple } from "@mui/material/colors";
import { performLogin } from "./performLogin"; // Importa a função de fetch
import { SubmitButton } from "./SubmitButton"; // Importa o botão de submit

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await performLogin(email, password); // Chama a função de fetch
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
        },
    });

    return (
        <form className="flex flex-col py-20 items-center" onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
                <TextField
                    className="w-72 shadow-2xl"
                    label="E-mail"
                    variant="outlined"
                    size="small"
                    color="primary"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </ThemeProvider>

            <ThemeProvider theme={theme}>
                <FormControl variant="outlined" className="shadow-2xl mt-6" size="small">
                    <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                    <OutlinedInput
                        className="w-72"
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        name="password"
                    />
                </FormControl>
            </ThemeProvider>

            <SubmitButton onClick={performLogin} label="Entrar" />
        </form>
    );
}
