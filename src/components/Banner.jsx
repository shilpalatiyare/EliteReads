import React from 'react'
// import banner from '../../img_main.png'
// import banner from '../../img_main2.png'
import banner from '../../img_main3.png'
// import banner from '../../img_main4.png'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
     <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
            <div className='space-y-12'>
            <h1 className='text-2xl font-bold'>LET'S DIVE INTO CAPTIVATING STORIES AND DISCOVER <span className='text-rose-400 '>NEW HORIZONS!!!</span></h1>
            <h1 className='text-5xl font-bold'>EliteReads.com - Where Books Spark New Adventures!</h1>
            <p>
            Join EliteReads.com, the ultimate online community for book enthusiasts! Create yout profile and enjoy access to a vast collection of free online books and seamless purchasing options. Embark on literary journeys and discover a world where books inspire new adventures and stories come to life. </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className='mt-6 bg-rose-400 text-black px-4 py-2 rounded-md hover:bg-rose-800 hover:text-white duration-300'>Get Started</button>
            </div>
        </div>
       
        <div className="order-1 w-full md:w-1/2">
       
        <img className='pt-20 md:mt-35  md:mb-40 md:w-[680px] md:h-[620px] md:ml-12' src={banner}></img>
        </div>
    </div>
    
    </>
  )
}

export default Banner
