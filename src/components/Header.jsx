import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GiHotMeal } from 'react-icons/gi';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import Switch from "react-switch";
import { ThemeContext } from "../provider/ThemeContext";

const Header = () => {
    const {theme,setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme( curr => curr === "light" ? "dark" : "light");
      }

  return (
    <div className='flex justify-between pt-8 pb-12'>
        <Link className='flex items-end' to="/">
          <GiHotMeal style={style} />
          <span className='text-slate-400 font-bold ml-1 text-xl'>YEPFood</span>
          <span></span>
        </Link>
        <div className='flex items-center'>
            { theme === "dark" && (
                <CiLight style={styleDark}/>
            )}
            <Switch  
                onColor="#fff"
                onHandleColor="#1e293b"
                uncheckedIcon={false}
                checkedIcon={false} 
                onChange={toggleTheme} 
                checked={theme === "dark"}
                className="mx-2"/>
            { theme === "light" && (
                <MdDarkMode style={styleLight}/>
            )}
        </div>
    </div>
  )
}

const style = { color: "#898989", fontSize: '32px'}; 
const styleDark = { color: "#fff", fontSize: '26px'}; 
const styleLight = { color: "#000", fontSize: '26px'}; 

export default Header