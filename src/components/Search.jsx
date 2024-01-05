import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    }

  return (
    <form onSubmit={submitHandler} className='flex relative items-center mx-auto max-w-xs mb-4 bg-gradient-to-r from-slate-600 to-slate-800 rounded-xl shadow-md shadow-slate-700'>
        <FaSearch style={style} />
        <input onChange={(e) =>setInput(e.target.value)} className='w-full px-8 py-2 bg-transparent text-cyan-50 rounded-xl outline-0 border-2 border-transparent focus:border-rose-800' type="text" value={input}/>
    </form>
  )
}

const style = { color: "white", fontSize: '16px', position: 'absolute', left: '10px'}; 

export default Search