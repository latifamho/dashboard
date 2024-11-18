import {
  Autocomplete,
  Button,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Databases, ID } from "appwrite";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import client from "./appwrite";
import { useNavigate } from "react-router-dom";
const countrys = [
  "Australia",
  "Brazil",
  "Canada",
  "France",
  "Germany",
  "India",
  "Italy",
  "Japan",
  "Mexico",
  "Russia",
  "Syria",
];
const AddCustomers = () => {
  const [isLoadin, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);
  const [country, setCountry] = useState("");
  const route = useNavigate();
  const databases = new Databases(client);
  const date = new Date();

  const add = () => {
    if (name && email && phone && status && country && email.includes("@")) {
      setIsLoading(true);
      const promise = databases.createDocument(
        "6554979d53f148f1f1fa",
        "655497a80e89ef7c6e09",
        ID.unique(),
        {
          name,
          phone,
          status,
          country,
          email,
          id: date.getTime().toString(),
        }
      );
      promise.then(
        function (response) {
          console.log(response);
          route("/");
          toast.success("Add user successful");
        },
        function (error) {
          console.log(error);
        }
      );
    } else if (email && !email.includes("@") && !email.includes(".com")) {
      toast.error("Check your email");
    } else toast.error("Fill the data");
    setIsLoading(false);
    console.log(status);
  };

  return (
    <div className="AddUser  min-h-[100vh]  bg-slate-100 w-full ">
      <ToastContainer />
      <div className="  p-[30px] pl-[300px] sm:pl-[90px] sm:p-[10px]">
        <div className="">
          <img
            src="/assest/costumers.svg"
            alt=""
            className="max-w-[200px] w-full my-[20px] mx-auto"
          />
          <div className="from flex flex-col justify-center flex-1 flex-wrap gap-[20px] w-full min-w-[100px]">
            <div className="text text-center">
              <h3 className="text-blue text-3xl font-bold">Add Admin</h3>
              <p className="text-slate-400 mt-1 text-sm ml-1">
                add a new admin for dashboard
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
                  label="Email"
                  variant="outlined"
                  className="basis-[45%]"
                  fullWidth
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hares@gmail.com"
                  size="medium"
                />
                <Autocomplete
                  className="basis-[45%]"
                  id="times"
                  options={countrys}
                  value={country}
                  renderInput={(params) => (
                    <TextField {...params} label="Country" />
                  )}
                  onChange={(_e, newValue) => setCountry(newValue)}
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  className="basis-[45%]"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+963 923 232 123"
                  size="medium"
                />
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="visibility"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="unvisibility"
                  />
                </RadioGroup>
              </div>
              <Button
                variant="contained"
                fullWidth
                size="medium"
                onClick={add}
                disabled={isLoadin ? true : false}
                className=" max-w-[400px] ok"
              >
                {isLoadin ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "Add Customer"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomers;
