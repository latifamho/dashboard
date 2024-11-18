import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Button, TextField } from "@mui/material";
const Help = () => {
    return (
        <div className="max-w-[1300px w-[95%]  pl-[300px] flex flex-col gap-[40px] sm:pl-[90px] py-[30px]">
            <img
                src="/assest/help.svg"
                alt=""
                className="max-w-[300px] h-fit mx-auto w-full "
            />
            <div className="flex flex-wrap items-center w-[90%] gap-[30px] justify-start lg:justify-evenly">
                <div className="details  w-fit mt-[10px]">
                    <h1 className="mb-[10px] text-2xl">Info about us</h1>
                    <div className="boxes  flex flex-col   rounded-md  mb-[40px]">
                        <div className="box sm:border-b flex-wrap py-[15px] px-[20px]   pl-0 flex gap-[8px] items-center">
                            <LocationOnOutlinedIcon className="text-blue" />{" "}
                            <span className="text-slate-500  text-sm">
                                256 Elizaberth Ave, CA, 90025
                            </span>
                        </div>
                        <div className="box sm:border-b flex-wrap py-[15px] px-[20px] pl-0  flex gap-[8px] items-center">
                            <PhoneOutlinedIcon className="text-blue" />{" "}
                            <span className="text-slate-500  text-sm">
                                +569 2316 2156
                            </span>
                        </div>
                        <div className="box  flex-wrap py-[15px] px-[20px] pl-0  flex gap-[8px] items-center">
                            <EmailOutlinedIcon className="text-blue" />{" "}
                            <span className="text-slate-500  text-sm">
                                info@travelin.com
                            </span>
                        </div>
                    </div>
                </div>{" "}
                <div className="flex flex-wrap ">
                    <div>
                        <h1 className=" mb-[10px] text-2xl ">
                            If you have any problem write it{" "}
                        </h1>
                        <div className="in flex gap-[15px] items-end max-w-[300px] flex-wrap">
                            <TextField variant="standard" label="message" />{" "}
                            <Button
                                variant="contained "
                                className="ok"
                                sx={{ margin: "0" }}
                            >
                                Sent
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
