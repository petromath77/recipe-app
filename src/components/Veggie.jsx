import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
      getVeggie();
  }, [])

  const getVeggie = async () => {
      const check = localStorage.getItem('veggie');
      
       if(check) {
        setVeggie(JSON.parse(check))
       } else {
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`);
          const data = await api.json();

               localStorage.setItem('veggie', JSON.stringify(data.recipes));
          setVeggie(data.recipes);
       }
  }

return (
  <div className="my-6">
    <h2 className='title text-xl font-bold mb-4'>Our Veggie Picks:</h2>
    <Swiper 
        breakpoints={{
            480: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            },
        }}
        slidesPerView={1} 
        spaceBetween={30}
        pagination={{
            clickable: true
          }}
        // modules={[Pagination]}
        className='flex flex-wrap justify-center popular'>
        {veggie.map(recipe => {
            return(
                <SwiperSlide className="pb-4 w-full md:w-1/3" key={recipe.id}>
                    <Link to={"/recipe/" + recipe.id}>
                        <div className="flex items-end justify-center bg-slate-400 rounded-2xl h-60 relative overflow-hidden">
                            <div className="absolute text-neutral-200 font-bold z-10 text-center px-4 mb-4">{recipe.title}</div>
                            <img className="absolute object-cover w-full h-full mix-blend-multiply" src={recipe.image} alt="item" loading='lazy'/>
                        </div>
                    </Link>
                </SwiperSlide>
            )
        })}
    </Swiper>
  </div>
);
}

export default Veggie