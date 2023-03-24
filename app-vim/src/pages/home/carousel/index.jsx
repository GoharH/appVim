import React, { useState } from 'react';
import Slider from 'react-slick';
import customer1 from '../../../assets/images/customer-logo-1.png';
import customer2 from '../../../assets/images/customer-logo-2.png';
import customer3 from '../../../assets/images/customer-logo-3.png';
import customer4 from '../../../assets/images/customer-logo-4.png';
import customer5 from '../../../assets/images/customer-logo-5.png';
import customer6 from '../../../assets/images/customer-logo-6.png';


function Carousel() {
    const [customer] = useState([
        {
            image: customer1,
        },
        {
            image: customer2,
        },
        {
            image: customer3,
        },
        {
            image: customer4,
        },
        {
            image: customer5,
        },
        {
            image: customer6,
        }
    ])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
    };

    console.log(customer)
    return <div className='carusele-customer'>
        <Slider {...settings}>
            {customer.map((item, index) => {
                return <div key={index}>
                    <div style={{ backgroundImage: `url(${item.image})` }} className="custom-item"></div>
                </div>
            })}
        </Slider>
    </div>
}

export default Carousel;


// import React from 'react';
// import Slider from 'react-slick';

// const Carousel = (props) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     initialSlide: 1
//                 }
//             }
//         ]
//     };

//     return (
//         <Slider {...settings}>
//             {props.items.map((item, index) => (
//                 <div key={index}>
//                     <img src={item.imageUrl} alt={item.title} />
//                     <p>{item.description}</p>
//                     <h3>{item.title}</h3>
//                 </div>
//             ))}
//         </Slider>
//     );
// };

// export default Carousel;