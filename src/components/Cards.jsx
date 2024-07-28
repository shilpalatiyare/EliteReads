import React from 'react'

function Cards({item}) {
    console.log(item);
  return (
    <>
        <div className='mt-5 my-5 p-3'>
            <div className="card bg-base-100 w-92 shadow-xl fixed-size-card hover:scale-105 duration-200">
                <figure>
                    <img
                    src={item.image}
                    alt="book" 
                    className="card-image"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">${item.price}</div>
                        <div className="cursor-pointer badge badge-outline hover:bg-blue-500 hover:text-white duration-200">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards


