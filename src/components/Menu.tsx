import React, { useEffect, useState } from "react";
import { RiSettingsLine } from "react-icons/ri";
import { BsBoxes } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { TfiHelp } from "react-icons/tfi";
import { MdOutlineLogout } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

import { IconButton } from "@mui/material";
import Dialo from "./Dialog";
const Menu = () => {
  const [openMen, setOpenMen] = useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const r = useLocation();
  useEffect(() => {
    setOpenMen(false);
  }, [r]);
  return (
    <div>
      <div
        className={`fixed bg-[#00000038] transition  z-10 right-0 top-0  h-full ${
          openMen ? "pop " : ""
        } `}
        onClick={() => setOpenMen(false)}
      ></div>
      <div
        className={`fixed menu bg-[#fff] flex flex-col  justify-between  py-[26px] px-[10px] min-h-full overflow-hidden  transition-all duration-300 z-20  w-[280px] sm:w-[70px] ${
          openMen ? "hoverMenu " : ""
        }  `}
      >
        <div className=" flex flex-col gap-[0px]">
          <h3
            className="flex items-center gap-[15px] mb-[15px] text-black p-[12px] text-[26px] sm:hover:bg-slate-200 sm:cursor-pointer rounded-lg "
            onClick={() => setOpenMen(!openMen)}
          >
            <div className="i">
              <RiSettingsLine className="text-2xl " />{" "}
            </div>
            <span className={`${openMen ? "" : "sm:hidden"}  font-bold `}>
              Setting
            </span>
          </h3>
          <NavLink
            to="/products"
            className="p flex items-center gap-[15px] mb-[5px] transition rounded-lg hover:hovered text-slate-400 p-[12px] "
          >
            {" "}
            <div className="i">
              <BsBoxes className="text-2xl" />
            </div>{" "}
            <span className={`${openMen ? "" : "sm:hidden"}  `}>Products</span>
          </NavLink>
          <NavLink
            to="/add_product"
            className="p flex items-center gap-[15px] mb-[5px] transition rounded-lg hover:hovered text-slate-400 p-[12px] "
          >
            <div className="i">
              <MdOutlineShoppingCart className="text-2xl" />
            </div>{" "}
            <span className={`${openMen ? "" : "sm:hidden"}  `}>
              Add Product
            </span>
          </NavLink>
          <NavLink
            to="/"
            className="p flex items-center  gap-[15px] mb-[5px] transition rounded-lg hover:hovered text-slate-400 p-[12px] "
          >
            <div className="i">
              <BsPerson className="text-2xl" />{" "}
            </div>
            <span className={`${openMen ? "" : "sm:hidden"}  `}>Customers</span>
          </NavLink>
          <NavLink
            to="/add_user"
            className="p flex items-center gap-[15px] mb-[5px] transition rounded-lg hover:hovered text-slate-400 p-[12px] "
          >
            {" "}
            <div className="i">
              {" "}
              <IoMdAdd className="text-2xl" />{" "}
            </div>
            <span className={`${openMen ? "" : "sm:hidden"}  `}>
              Add Customers
            </span>
          </NavLink>
          <NavLink
            to="/add_admin"
            className="p flex items-center gap-[15px] mb-[5px] transition rounded-lg hover:hovered text-slate-400 p-[12px] "
          >
            <div className="i">
              <MdOutlineAdminPanelSettings className="text-2xl" />{" "}
            </div>
            <span className={`${openMen ? "" : "sm:hidden"}  `}>Add Admin</span>
          </NavLink>
          <NavLink
            to="/help"
            className="p flex items-center gap-[15px] mb-[5px] transition rounded-lg hover:hovered text-slate-400 p-[12px] "
          >
            <div className="i">
              <TfiHelp className="text-2xl" />{" "}
            </div>
            <span className={`${openMen ? "" : "sm:hidden"}  `}>Help</span>
          </NavLink>
        </div>
        <div className="flex flex-col ">
          <div className="profile flex   items-center gap-[8px] h-[56px] relative ">
            <div
              className={`text p-[8px] text-sm items-center justify-between flex-1 flex flex-nowrap  sm:hidden ${
                openMen ? "openText" : ""
              }`}
            >
              <div className="paragraph">
                <p className="text-black font-medium">Latifa</p>
                <p className="text-slate-400">Project Manager</p>
              </div>
              <IconButton size="large" onClick={() => setOpenDialog(true)}>
                <MdOutlineLogout className="text-lg " />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Dialo open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
};

export default Menu;
