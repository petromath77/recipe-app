import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {motion} from "framer-motion";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
    const recipes = await data.json();

    setCuisine(recipes.results);
  }

  useEffect( () =>  {
    try {
      getCuisine(params.type);
    } catch (error) {
      console.log(error);
    }
  }, [params.type])

  return (
    <motion.div className='grid grid-cols-auto-fit gap-8 py-12'
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}

    >
      {cuisine.map( recipe => {
        return(
          <Link to={"/recipe/" + recipe.id} key={recipe.id}>
            <div className="justify-self-center">
              <img className='rounded-lg w-full' src={recipe.image} alt={recipe.title} />
              <h3 className='title mt-2 text-center text-neutral-200 font-bold'>{recipe.title}</h3>
            </div>
          </Link>
          )
      })}
    </motion.div >
  )
}

export default Cuisine