import React from "react";
import './style.scss';
import '../../../assets/style/global.scss'

const ArticleBox = ({ image, title, main }) => {

    return <div className="G-padding-33">
        <div className="article-box">
            <div className="product-overflow">
                <span className="product-image"
                    style={{ backgroundImage: `url(${image})` }}></span>
            </div>
            <h3 className="artic-title">{title}</h3>
            <p className="artic-main">{main}</p>
            <div className="G-button-colored">
                <button>DETAILS</button>
            </div>
        </div>
    </div>

}
export default ArticleBox