import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {motion} from "framer-motion";

const Recipe = () => {
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    let params = useParams();

    useEffect( () =>  {
        const fetchDetails = async () => {
            const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
            const detailData = await data.json();
     
            setDetails(detailData);
        }

        try {
            fetchDetails();
        } catch (error) {
            console.log(error);
        }

      }, [params.name]);

  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <div className='p-8 bg-slate-500/30 rounded-xl mt-8 '>
            <h2 className='title mb-4 text-xl text-slate-200 font-bold'>{details.title}</h2>
            <div className='flex flex-wrap sm:-mx-4'>
                <div className='w-full mb-6 sm:w-1/2 sm:px-4 sm:mb-0'>
                    <img className='rounded-xl w-full' src={details.image} alt="detail" loading="lazy"/>
                </div>
                <div className='w-full sm:w-1/2 sm:px-4'>
                    <div className='flex mb-6'>
                        <button 
                            className={activeTab === "instructions" ? 'px-5 py-2 bg-slate-200 font-medium mr-4 ease-in-out duration-300 active-btn' : 'px-5 py-2 bg-slate-200 font-medium text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:border-transparent hover:text-slate-200 mr-4'}
                            onClick = {() => setActiveTab('instructions')}
                        >Instructions</button>
                        <button 
                            className={activeTab === "ingridients" ? 'px-5 py-2 bg-slate-200 font-medium ease-in-out duration-300 active-btn' : 'px-5 py-2 bg-slate-200 font-medium text-slate-800 border-2 border-slate-800 hover:bg-slate-800 hover:border-transparent hover:text-slate-200'}
                            onClick = {() => setActiveTab('ingridients')}
                        >Ingridients</button>
                    </div>
                    { activeTab === "instructions" && (
                            <div>
                                <div className='mb-4' dangerouslySetInnerHTML={{__html: details.summary}}></div>
                                <div className='mb-4 italic' dangerouslySetInnerHTML={{__html: details.instructions}}></div>
                            </div>
                        ) 
                    }

                    { activeTab === "ingridients" && (
                        <ul className='list-disc pl-8'>
                            { details.extendedIngredients.map(item => (
                                    <li key={item.id}>{item.original}</li>
                                ))

                            }
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </motion.div>

   )
}

export default Recipe