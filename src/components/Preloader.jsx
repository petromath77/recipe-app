import React from 'react';

const Preloader = () => {
  return (
    <div className='absolute w-full h-full flex bg-gray-500 z-50 ease-in-out duration-300'>
        <div className="lds-ellipsis m-auto"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Preloader