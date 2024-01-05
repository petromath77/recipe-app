import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NoResults from '../components/NoResults';

export const Searched = () => {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearch = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const recipes = await data.json();
    
        setSearched(recipes.results);
      }

      useEffect( () =>  {
        getSearch(params.search);
      }, [params.search])

  return (
    <div className='grid grid-cols-auto-fit gap-8 py-12'>
      {searched.length > 0 ? 
        searched.map( recipe => {
          return(
            <Link to={"/recipe/" + recipe.id} key={recipe.id}>
                <div className="justify-self-center">
                <img className='rounded-lg w-full' src={recipe.image} alt={recipe.title} />
                <div className='title mt-2 text-center text-neutral-200 font-bold'>{recipe.title}</div>
                </div>
            </Link>
            )
        }) : 
        <NoResults />
      }
    </div>
  )
}
