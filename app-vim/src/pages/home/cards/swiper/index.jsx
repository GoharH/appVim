import React, { useState } from "react";
import Slider from "react-slick";
import Card from "..";
import cardImg1 from '../../../../assets/images/testimonial-1.jpg';
import cardImg2 from '../../../../assets/images/testimonial-2.jpg';
import cardImg3 from '../../../../assets/images/testimonial-3.jpg';
import cardImg4 from '../../../../assets/images/testimonial-4.jpg';
import cardImg5 from '../../../../assets/images/testimonial-5.jpg';
import cardImg6 from '../../../../assets/images/testimonial-6.jpg';

const CaruseleSlik = () => {

    const [cardMain] = useState([
        {
            cardImg: cardImg1,
            description: "I just finished my trial period and was so amazed with the support and results that I purchased AppVim.",
            worker: "Jude Thorn - Designer",
        },
        {
            cardImg: cardImg2,
            description: "I don't know how I managed to get work done without AppVim. The speed of this application is amazing!",
            worker: "Roy Smith - Developer",
        },
        {
            cardImg: cardImg3,
            description: "This app has the potential of becoming a mandatory tool in every marketer's day to day operations.",
            worker: "Marsha Singer - Marketer",
        },
        {
            cardImg: cardImg4,
            description: "Searching for a great marketing automation app was difficult but thankfully I found AppVim.",
            worker: "Tim Shaw - Designer",
        },
        {
            cardImg: cardImg5,
            description: "AppVim's support team is amazing. They've helped me with some issues and I am so grateful to them.",
            worker: "Lindsay Spice - Marketer",
        },
        {
            cardImg: cardImg6,
            description: "Who would have thought that AppVim can provide such amazing results in just a few weeks of use",
            worker: "Ann Black - Developer",
        }
    ])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    // console.log(cardImg6)
    return <div>
        <Slider {...settings}>

            {cardMain.map((item, index) => {
                return <div key={index}>
                    <Card cardImg={item.cardImg}
                        description={item.description}
                        worker={item.worker} />
                </div>
            })}


        </Slider>
    </div>
}
export default CaruseleSlik






