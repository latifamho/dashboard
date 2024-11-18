import { Button, CircularProgress, TextField } from "@mui/material";
import { Databases, ID } from "appwrite";
import React, {   useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import client from "./appwrite";
import { useNavigate } from "react-router-dom"; 

const AddProducts = () => {
    const [isLoadin, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [company, setCompany] = useState("");
    const [from, setFrom] = useState("");
    const [price, setPrice] = useState("");
    const route = useNavigate();
    const databases = new Databases(client);
    const dateNow = new Date();
    const add = () => {
        if (name && date) {
            setIsLoading(true);
            const promise = databases.createDocument(
                "6554979d53f148f1f1fa",
                "6561bd6c4766cb79902b",
                ID.unique(),
                {
                    name,
                    date,
                    from,
                    price,
                    company,
                    id: dateNow.getTime().toString(),
                }
            );
            promise.then(
                function (response) {
                    console.log(response);
                    route("/products");
                    toast.success("Add product successful");
                },
                function (error) {
                    console.log(error);
                }
            );
        } else toast.error("Fill the data");
        setIsLoading(false);
    };

    return (
        <div className="AddUser  min-h-[100vh]  bg-slate-100 w-full ">
            <ToastContainer />
            <div className="  p-[30px] pl-[300px] sm:pl-[90px] sm:p-[10px]">
                <div className="">
                    <img
                        src="/assest/porducts.svg"
                        alt=""
                        className="max-w-[200px] w-full my-[20px] mx-auto"
                    />
                    <div className="from flex flex-col justify-center flex-1 flex-wrap gap-[20px] w-full min-w-[100px]">
                        <div className="text text-center">
                            <h3 className="text-blue text-3xl font-bold">
                                Add Product
                            </h3>
                            <p className="text-slate-400 mt-1 text-sm ml-1">
                                add a new product for dashboard
                            </p>
                        </div>
                        <form className="flex flex-col justify-center gap-[20px] w-full max-w-[800px] mx-auto">
                            <div className="grid  grid-cols-2 gap-[20px]  sm:grid-cols-1 ">
                                <TextField
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                    className="basis-[45%]"
                                    fullWidth
                                    size="medium"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Latifa Mho"
                                    autoFocus
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Company"
                                    variant="outlined"
                                    className="basis-[45%]"
                                    fullWidth
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    placeholder="coca-cola"
                                    size="medium"
                                />

                                <TextField
                                    id="outlined-basic"
                                    label="From"
                                    variant="outlined"
                                    className="basis-[45%]"
                                    fullWidth
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    placeholder="America"
                                    size="medium"
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Price"
                                    variant="outlined"
                                    className="basis-[45%]"
                                    fullWidth
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="459"
                                    size="medium"
                                />
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="py-[15px] rounded-sm text-[#0009] font-medium	 input-date bg-slate-100 placeholder:text-[#0009] border border-[#00000036] px-[10px] outline-none date-input"
                                />
                            </div>
                            <Button
                                variant="contained"
                                fullWidth
                                size="medium"
                                onClick={add}
                                sx={{
                                    backgroundColor: "#5932ea",
                                    maxWidth: "250px",
                                    margin: "0 auto",
                                }}
                                disabled={isLoadin ? true : false}
                                // className=" max-w-[400px] ok"
                            >
                                {isLoadin ? (
                                    <CircularProgress color="inherit" />
                                ) : (
                                    "Add Product"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
