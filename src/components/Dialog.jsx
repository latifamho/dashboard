import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { deleteIdCookie } from "../utils/Cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dialo = ({ setOpen, open }) => {
    const router = useNavigate();
    const handleClickOpen = () => {
        setOpen(true);
    };
    const ha = () => {
        setOpen(false);
        deleteIdCookie();
        toast.info("you logged out");
        setTimeout(() => {
            router("/", { path: true });
        }, 1000);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Confirm logout"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    are you sure you want to log out ?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className="cancel">
                    Cancel
                </Button>
                <Button
                    onClick={ha}
                    autoFocus
                    className="oke"
                    variant="contained"
                    size="small"
                >
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Dialo;
