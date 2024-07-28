import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from '../../List.json'
import Cards from './Cards';

function FreeBook() {
    const filterData = List.filter((data)=>data.category==="free");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className='justify-center items-center text-center'>
                    <h1 className="font-semibold text-4xl pb-4 pt-5">Free E-Books</h1>
                    <p className='text-xl pb-10' >
                        "Embark Your Literary Journeys With Our Valueable Books"
                    </p>
                </div>
                <div> 
                    <Slider {...settings}>
                        {filterData.map((item) => (
                        <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
      );
    }
export default FreeBook;

