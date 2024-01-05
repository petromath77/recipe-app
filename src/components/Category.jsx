import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import {NavLink} from 'react-router-dom';

const Category = () => {
  return (
    <div className="flex justify-center items-center max-w-xs py-6 mx-auto gap-2">
        <NavLink to={"/cuisine/Italian"} className="flex flex-col justify-center items-center shrink-0 w-18 h-18 p-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-zinc-500  hover:to-rose-900 hover:translate-y-0.5 ease-in-out duration-300 shadow-md shadow-slate-600" activeclassname='active'>
            <FaPizzaSlice style={style}/>
            <h4 className="mt-2 text-xs text-slate-200 font-medium">Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/American"} className="flex flex-col justify-center items-center shrink-0 w-18 h-18 p-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-zinc-500  hover:to-rose-900 hover:translate-y-0.5 ease-in-out duration-300 shadow-md shadow-slate-600">
            <FaHamburger style={style}/>
            <h4 className="mt-2 text-xs text-slate-200 font-medium">American</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thai"} className="flex flex-col justify-center items-center shrink-0 w-18 h-18 p-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-zinc-500  hover:to-rose-900 hover:translate-y-0.5 ease-in-out duration-300 shadow-md shadow-slate-600">
            <GiNoodles style={style}/>
            <h4 className="mt-2 text-xs text-slate-200 font-medium">Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/Japanese"} className="flex flex-col justify-center items-center shrink-0 w-18 h-18 p-2 rounded-full bg-gradient-to-r from-slate-600 to-slate-800 hover:from-zinc-500  hover:to-rose-900 hover:translate-y-0.5 ease-in-out duration-300 shadow-md shadow-slate-600">
            <GiChopsticks style={style}/>
            <h4 className="mt-2 text-xs text-slate-200 font-medium">Japanese</h4>
        </NavLink>
    </div>
  )
}

const style = { color: "white", fontSize: '14px'}; 


export default Category