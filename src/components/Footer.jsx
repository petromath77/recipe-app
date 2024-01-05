import React from 'react';

const Footer = () => {
  return (
    <div className='sticky top-[100vh] flex justify-between items-center py-8 mt-8'>
        <div>&#169; 2023 All rights reserved</div>
        <a className='font-bold' href="https://spoonacular.com/" target="_blank" rel="noreferrer">API</a>
    </div>
  )
}

export default Footer