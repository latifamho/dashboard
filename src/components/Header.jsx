import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LuScreenShare } from "react-icons/lu";
import { MdEventAvailable } from "react-icons/md";

const Header = () => {
  return (
    <div className="header h-fit">
      <div className=" flex justify-between items-center mb-[20px] flex-wrap ">
        <h3 className="text-2xl font-bold ">Hello Latifa</h3>
        <div className="input items-center justify-between gap-2 flex bg-white max-w-[calc(100% - 60px)]">
          <LiaSearchSolid />
          <input type="text" placeholder="Search" className="bg-white w-full" />
        </div>
      </div>
      <div className="number flex w-fit mx-auto border p-[20px] rounded-xl my-[30px] gap-[15px] flex-wrap justify-center ">
        <div className="post flex items-center p-[15px] gap-2 flex-wrap justify-center ">
          <MdEventAvailable className="text-green text-4xl box-content	p-[15px] bg-[#e3f1e3 ] rounded-full" />
          <div className="text">
            <p className="text-xs">Total Customers</p>
            <p className="text-3xl">232</p>
            <p className="text-xs text-slate-400">this month</p>
          </div>
        </div>
        <div className="post flex items-center p-[15px] gap-2 flex-wrap justify-center ">
          <MdOutlinePersonOutline className="text-green text-4xl box-content	p-[15px] bg-[#e3f1e3 ] rounded-full" />
          <div className="text">
            <p className="text-xs">Total Customers</p>
            <p className="text-3xl">5,423</p>
            <p className="text-xs text-slate-400">this month</p>
          </div>
        </div>
        <div className="post flex items-center p-[15px] gap-2 flex-wrap justify-center ">
          <LuScreenShare className="text-green text-4xl box-content	p-[15px] bg-[#e3f1e3 ] rounded-full" />
          <div className="text">
            <p className="text-xs">Total Customers</p>
            <p className="text-3xl">982</p>
            <p className="text-xs text-slate-400">this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
