import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import { buttonStyles } from "../mui/muiStyle";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
    Button,
    CircularProgress,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import client from "./appwrite";
import { Account } from "appwrite";
import { ToastContainer, toast } from "react-toastify";
import { getIdCookie, setIdCookie } from "../utils/Cookie";

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(true);
    const [email, setEmail] = useState("");
    const [Pass, setPass] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    console.log(getIdCookie());
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const router = useNavigate();
    const account = new Account(client);

    const log = async () => {
        setIsLoading(true);
        if (!email || !Pass) {
            toast.error("Invalid email address");
            setIsLoading(false);
            return;
        }
        try {
            const response = await account.createEmailSession(email, Pass);
            console.log(response); // Success
            toast.success("Registration Success");
            setIdCookie(response.userId);
            setTimeout(() => {
                router("/", { path: true });
            }, 1000);
        } catch (error) {
            toast.error(error.message);
            console.log(error); // Failure
        }
        setIsLoading(false);
    };

    return (
        <div className="login  h-[99vh]  flex justify-center items-center bg-white">
            <ToastContainer />
            <div className="container flex justify-center items-center p-[30px]">
                <div className="flex gap-[30px] p-[30px] border justify-between flex-wrap">
                    <div className="img max-w-[350px]">
                        <img
                            src="/assest/login.png"
                            alt=""
                            className="max-w-[100%]"
                        />
                    </div>
                    <div className="from flex flex-col justify-evenly flex-1 flex-wrap gap-[20px]">
                        <div className="text">
                            <h3 className="text-blue text-4xl font-bold">
                                Login
                            </h3>
                            <p className="text-slate-400 mt-1 text-sm ml-1">
                                please login first
                            </p>
                        </div>
                        <form className="flex flex-col justify-between items-start gap-[20px] ">
                            <TextField
                                id="outlined-basic"
                                InputLabelProps={{
                                    className: "textfield__label",
                                }}
                                label="Email"
                                variant="outlined"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="textField"
                                fullWidth
                            />
                            <FormControl
                                sx={{ width: "25ch" }}
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    value={Pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    id="outlined-adornment-password"
                                    type={showPassword ? "password" : "text"}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {!showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Button
                                style={buttonStyles}
                                variant="contained"
                                fullWidth
                                size="large"
                                onClick={log}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <CircularProgress color="inherit" />
                                ) : (
                                    "Submit"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
