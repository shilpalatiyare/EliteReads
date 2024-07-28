import React from 'react'
import List from '../../List.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'

function Genre() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>
                    We're delighted to have you 
                    <span className='text-rose-400'> here! :)</span>
                </h1>
                <p className='mt-12'> 
                Welcome to our exclusive book store! Here, you will discover a vast collection of books available for purchase. Whether you're seeking the latest bestsellers, timeless classics, or unique niche genres, we have something to captivate every reader. Dive into our carefully curated selection and embark on your next literary adventure today. Browse our collection and find your next great read!
                </p>
              
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {
                    List.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
            <div className='mt-5 mb-8 items-center justify-center text-center'>
            <Link to="/">
               <button className='mt-6 bg-rose-400 text-black px-4 py-2 rounded-md hover:bg-rose-800 hover:text-white duration-300'>Back to Home Page</button>
             </Link>
            </div>
            
        </div>
    </>
    
  )
}

export default Genre
