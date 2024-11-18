import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
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
import { ToastContainer, toast } from "react-toastify";
import AuthService from "../services/auth.service";

const AddAdmin = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);

    const [errorPass, setErrorPass] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useNavigate();

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword || !userId || !name) {
            setErrorPass(true);
            toast.error("Please fill in all fields");
            return;
        }
        if (password !== confirmPassword) {
            setErrorPass(true);
            toast.error("Passwords do not match");
            return;
        }
        setIsLoading(true);
        const authService = AuthService.getInstance();
        const data = {
            userId,
            email,
            password,
            name,
        };
        try {
            await authService.register(data);
            toast.success(`${data?.name} added to admins`);
            setTimeout(() => {
                router("/");
            }, 1000);
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-[1300px w-[95%]  pl-[300px]  sm:pl-[90px] py-[50px]">
            <div className="addAdmin    flex justify-center items-center ">
                <ToastContainer />
                <div className="">
                    <div className="">
                        <img
                            src="/assest/porducts.svg"
                            alt=""
                            className="max-w-[200px] w-full my-[20px] mx-auto"
                        />
                        <div className="from flex flex-col justify-center flex-1 flex-wrap gap-[20px] w-full min-w-[100px]">
                            <div className="text text-center">
                                <h3 className="text-blue text-3xl font-bold">
                                    Add Admin
                                </h3>
                                <p className="text-slate-400 mt-1 text-sm ml-1">
                                    add a new admin for dashboard
                                </p>
                            </div>
                            <form className="flex flex-col justify-center gap-[20px] w-full max-w-[800px] mx-auto">
                                <div className="grid   gap-[20px] sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2  ">
                                    <TextField
                                        id="outlined-basic"
                                        label="Name"
                                        variant="outlined"
                                        className="basis-[45%]"
                                        fullWidth
                                        autoFocus
                                        size="medium"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        placeholder="Latifa Mho"
                                    />{" "}
                                    <TextField
                                        id="outlined-basic"
                                        label="userName"
                                        variant="outlined"
                                        className="basis-[45%]"
                                        fullWidth
                                        value={userId}
                                        onChange={(e) =>
                                            setUserId(e.target.value)
                                        }
                                        placeholder="coca-cola"
                                        size="medium"
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                        className="basis-[45%] "
                                        fullWidth
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="coca-cola"
                                        size="medium"
                                    />
                                    <FormControl
                                        sx={{ m: 1, width: "25ch" }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-password">
                                            Password
                                        </InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            id="outlined-adornment-password"
                                            type={
                                                showPassword
                                                    ? "password"
                                                    : "text"
                                            }
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
                                    <FormControl
                                        sx={{ m: 1, width: "25ch" }}
                                        variant="outlined"
                                    >
                                        <InputLabel htmlFor="outlined-adornment-password">
                                            Confirm Password
                                        </InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={errorPass}
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                            id="outlined-adornment-password"
                                            type={
                                                showPassword2
                                                    ? "password"
                                                    : "text"
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={
                                                            handleClickShowPassword2
                                                        }
                                                        onMouseDown={
                                                            handleMouseDownPassword2
                                                        }
                                                        edge="end"
                                                    >
                                                        {!showPassword2 ? (
                                                            <VisibilityOff />
                                                        ) : (
                                                            <Visibility />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Confirm Password"
                                        />
                                    </FormControl>
                                </div>
                            </form>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    backgroundColor: "#5932ea",
                                    maxWidth: "400px",
                                    margin: "20px auto",
                                }}
                                size="medium"
                                onClick={handleRegister}
                                disabled={isLoading ? true : false}
                                // className=" max-w-[400px] ok mx-auto my-[20px] "
                            >
                                {isLoading ? (
                                    <CircularProgress color="inherit" />
                                ) : (
                                    "Add Product"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAdmin;
