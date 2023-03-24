import React, { useState } from "react";
import './style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner_bg from '../../assets/images/banner.jpg';
import banner_img from '../../assets/images/hero-6.png';
import KeyClass from "./keyClass";
import img1 from '../../assets/images/takeaways-1.svg';
import img2 from '../../assets/images/takeaways-2.svg';
import img3 from '../../assets/images/takeaways-3.svg';
import img4 from '../../assets/images/takeaways-4.svg';
import articleImage1 from '../../assets/images/product-1.jpg';
import articleImage2 from '../../assets/images/product-2.jpg';
import articleImage3 from '../../assets/images/product-3.jpg';
import schaduleImg from '../../assets/images/description-hero-6.png';
import previwImg from '../../assets/images/featured-product-video-frame.jpg';
import Schedul from "./schedul";
import Tracking from "./tracking";
import Organize from "./organize";
import PricingBox from "./pricing";
import Card from "./cards";
import Carousel from "./carousel";
import Swiper from "swiper";
import CaruseleSlik from "./cards/swiper";
import ArticleBox from "./article-box";



const Home = () => {
    const [user, setUser] = useState({
        mail: '',
    })
    const [errorUser, setErrorUser] = useState({
        mail: '',
    })
    const [keyClass] = useState([
        {
            image: img1,
            title: 'Outstanding Product',
            main: 'Without an awesome product your marketing actions will only be a waste of resources'
        },
        {
            image: img2,
            title: 'Perfect Launch',
            main: 'Learn how to orchestrate the perfect launch using dedicated online tools and apps'
        },
        {
            image: img3,
            title: 'Influencer Marketing',
            main: 'A good well-indexed blog will help you establish yourself as an industry expert'
        },
        {
            image: img4,
            title: 'Focused Blogging',
            main: 'Without an awesome product your marketing actions will only be a waste of resources'
        }
    ])

    const validation = () => {
        let isValidate = true
        const newErrors = {
            mail: '',
        }

        if (!user.mail.trim().length) {
            newErrors.mail = 'Fill in this field'
            isValidate = false
        }

        setErrorUser(newErrors)
        return isValidate
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        setErrorUser({ ...errorUser, [e.target.name]: '' })
    }

    const handleConfirmClick = () => {
        if (validation()) {
            setUser({
                mail: '',
            })
        }
    }
    const handleVideoStart = () => {

    }

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return <section>
        <div className="home-banner-bg" style={{ backgroundImage: `url(${banner_bg})` }}>
            <div className="banner-color-cover">
                <div className="G-container">
                    <div className="home-banner G-flex">
                        <div className="G-padding-50">
                            <div className="banner-main">
                                <h1>Mobile App HTML Landing Page</h1>
                                <p className="banner-main-text">We're passionate about creating the best template apps for personal development</p>
                                <label>
                                    <input type="text" name="mail" value={user.mail} onChange={handleChange} />
                                    <button onClick={handleConfirmClick}>Download Now</button>
                                </label>
                                {errorUser.mail ? <p className="G-error-text">{errorUser.mail}</p> : null}
                                <p className="banner-main-text">Registration ends in</p>
                                <p className="banner-main-text">This offer has expired!</p>
                            </div>
                        </div>
                        <div className="G-padding-50">
                            <div className="banner-image" style={{ backgroundImage: `url(${banner_img})` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="takeaways">
            <div className="G-container">
                <div className="product-main G-center">
                    <h2 className="home-title">Key Class Takeaways</h2>
                    <p className="home-section-box-main">
                        Take AppVim's live class and learn about the 4 key pillars of efficient online marketing. With these in mind you will design better marketing plans and sell more of your products
                    </p>
                </div>
                <div className="key-class-part G-flex">
                    {keyClass.map((item, index) => {
                        return <div key={index} className="G-padding-25" >
                            <KeyClass image={item.image} title={item.title} main={item.main} />
                        </div>
                    })}

                </div>
            </div>
        </div>
        <div className="schedule-section">
            <div className="G-container">
                <div className="schedul G-flex">
                    <div className="G-padding-50">
                        <div className="schadule-image" style={{ backgroundImage: `url(${schaduleImg})` }}></div>
                    </div>
                    <div className="G-padding-50">
                        <div className="tabs-navigator">
                            <ul className="G-flex">
                                <li className="tabs-list G-flex">
                                    <span className="icon-clock"></span>
                                    <p>Schedule</p>
                                </li>
                                <li className="tabs-list G-flex">
                                    <span className="icon-bullet-list"></span>
                                    <p>Tracking</p>
                                </li>
                                <li className="tabs-list G-flex">
                                    <span className="icon-calendar"></span>
                                    <p>Organize</p>
                                </li>
                            </ul>
                        </div>
                        <div className="tabs-main">
                            {/* <Schedul /> */}
                            {/* <Tracking /> */}
                            <Organize />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="previw-section">
            <div className="G-container">
                <div className="previw-part">
                    <h3 className="home-title">Previw</h3>
                    <div className="video-part">
                        <div className="video-img" onClick={handleVideoStart} style={{ backgroundImage: `url(${previwImg})` }}>
                        </div>
                        <div className="previw-main">
                            <h4>Featured Product Title</h4>
                            <p>The featured product of any business consultancy company is the actual business consultant</p>
                            <ul>
                                <li>Web Designer With Photoshop And Illustrator</li>
                                <li>UI Developer For Great Ecommerce Sites</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="pricing">
            <div className="G-container">
                <div className="pricing-main G-center">
                    <h2 className="home-title">Pricing Table</h2>
                    <p className="home-section-box-main">
                        We've prepared pricing plans for all budgets so you can get started right away. They're great for small companies and large organizations                    </p>
                </div>
                <div className="pricing-part G-flex">
                    <PricingBox title='BASIC'
                        price='FREE'
                        duration='14 days trial'
                        className1='none'
                        className='none' />
                    <PricingBox title='ADVANCED'
                        price='29.99'
                        duration='monthly'
                        className1='done'
                        className='none' />
                    <PricingBox title='COMPLETE'
                        price='39.99'
                        duration='monthly'
                        className1='done'
                        className='done' />
                </div>
                {/* <div className="sale-box">
                    <p className="mark">Best Value</p>
                </div> */}
            </div>
        </div>
        <div className="attended-users">
            <div className="G-container">
                <div className="attenders">
                    <div className="statistic G-center">
                        <div className="statistic-box G-center">
                            <span className="icon-download3"></span>                            <p className="stat-num">931</p>
                            <p>Downloads</p>
                        </div>
                        <div className="statistic-box G-center">
                            <span className="icon-happy"></span>                            <p className="stat-num">385</p>
                            <p>Happy Users</p>
                        </div>
                        <div className="statistic-box G-center">
                            <span className="icon-cog"></span>                            <p className="stat-num">159</p>
                            <p>Good Reviews</p>
                        </div>
                        <div className="statistic-box G-center">
                            <span className="icon-rocket"></span>                            <p className="stat-num">211</p>
                            <p>Orders Received</p>
                        </div>
                    </div>
                    <h3>
                        Many people attended AppVim's Live Class and were happy to learn so much about online marketing. You should join
                    </h3>
                    <button>Download Now</button>
                </div>
            </div>
        </div>
        <div className="carusele">
            <div className="G-container">
                <div className="carusele-slik">
                    <CaruseleSlik />
                </div>
                {/* <div className="card-carousel G-center">
                    {cardMain.map((item, index) => {
                        return <div key={index} >
                            <Card cardImg={item.cardImg}
                                description={item.description}
                                worker={item.worker} />
                        </div>
                    })}
                </div> */}
            </div>
        </div>
        <div className="carusele-logos">
            <div className="G-container">
                <h3 className="home-title">Trusted by companies</h3>
                <Carousel />
            </div>
        </div>
        <div className="article-section">
            <div className="G-container">
                <div className="article-part">
                    <h3 className="home-title">Article Details</h3>
                    <div className="article-boxes">
                        <ArticleBox
                            image={articleImage1}
                            title='Marketing Planner'
                            main='Use our software application to analyse your market position and business environment.' />
                        <ArticleBox
                            image={articleImage2}
                            title='Business Designer'
                            main='Design your business with our software application to analyse your market position and business environment' />
                        <ArticleBox
                            image={articleImage3}
                            title='Reporting Tools'
                            main='Reporting tools are powerful software scripts created to serve the purpose of evaluating data and reporting' />
                    </div>
                </div>
            </div>
        </div>
    </section>
}
export default Home