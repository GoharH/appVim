import React from "react";
import './style.scss';
import image from '../../assets/images/project-details-large.jpg';
import stratImg from '../../assets/images/project-details-small.jpg';

const TitleArticle = () => {

    return <section>
        <div className="G-pages-banner G-center">
            <h1>Title Article Details Here</h1>
        </div>
        <div className="G-page-location">
            <div className="G-container G-flex">
                <a href="#">Home</a>
                <p>Title Article Details Here</p>
            </div>
        </div>
        <div className="G-container G-section-padding">
            <div className="article-image-box G-center">
                <div className='article-image' style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="G-page-text">
                <h3>Business Analysis And Reporting Tools</h3>
                <p>
                    AppVim also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page from which you came, the regions from which you navigate the web page, and the web page(s) you access (as applicable).                </p>
                <p>
                    When you first register for a AppVim account, and when you use the Services, we collect some <span>Personal Information</span> about you such as:
                </p>
                <div className="G-flex strategy-list">
                    <div className="G-padding-50">
                        <ul>
                            <li>The geographic area where you use your computer and mobile devices</li>
                            <li>
                                Your full name, username, and email address and other contact details</li>
                            <li>A unique AppVim user ID (an alphanumeric string) which is assigned to you upon registration</li>
                            <li>Other optional information as part of your account profile</li>
                            <li>Your IP Address and, when applicable, timestamp related to your consent and confirmation of consent</li>
                            <li>Other information submitted by you or your organizational representatives via various methods</li>
                        </ul>
                    </div>
                    <div className="G-padding-50">
                        <ul>
                            <li>
                                Your billing address and any necessary other information to complete any financial transaction, and when making purchases through the Services, we may also collect your credit card or PayPal information
                            </li>
                            <li>
                                User generated content (such as messages, posts, comments, pages, profiles, images, feeds or communications exchanged on the Supported Platforms)
                            </li>
                            <li>
                                Images or other files that you may publish via our Services</li>
                            <li>Information (such as messages, posts, comments, pages, profiles, images) we may receive relating to communications you send us, such as queries or comments concerning</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="G-page-text G-flex strategy-main">
                <div className="G-padding-50">
                    <div className="page-box-margin">
                        <h3>Improving Product Strategy</h3>
                        <p>AppVim also automatically collects and receives certain information from your computer or mobile device, including the activities you perform on our Website, the Platforms, and the Applications, the type of hardware and software you are using (for example, your operating system or browser), and information obtained from cookies. For example, each time you visit the Website or otherwise use the Services, we automatically collect your IP address, browser and device type, access times, the web page.</p>
                    </div>
                </div>
                <div className="G-padding-50">
                    <div className="strategy-image" style={{ backgroundImage: `url(${stratImg})` }}></div>
                </div>
            </div>
            <div className="G-page-text colored-text">
                <p>AppVim is a HTML landing page template tool. By its nature, Services enable our customers to promote their products and services integrate with hundreds of business applications that they already use, all in one place. Services help our customers promote their products and services, marketing and advertising; engaging audiences; scheduling and publishing messages; and analyze the results.</p>
            </div>
            <div className="G-page-text">
                <h3>Project Evaluation And Predictions</h3>
                <p>By using any of the Services, or submitting or collecting any Personal Information via the Services, you consent to the collection, transfer, storage disclosure, and use of your Personal Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services. Information in the manner set out in this Privacy Policy. If you do not consent to the use of your Personal Information in these ways, please stop using the Services.</p>
                <div className="G-button-transparent">
                    <button>BACK</button>
                </div>
            </div>
        </div>
        <div className="G-page-location">
            <div className="G-container G-flex">
                <a href="#">Home</a>
                <p>Title Article Details Here</p>
            </div>
        </div>
    </section>
}
export default TitleArticle