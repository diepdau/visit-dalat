import React from 'react'
import './style.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import h1 from "../../../assets/foods/1.png"
import h2 from "../../../assets/foods/2.png"
import h3 from "../../../assets/foods/3.png"
import h4 from "../../../assets/foods/4.png"
import h5 from "../../../assets/foods/5.png"
import h6 from "../../../assets/foods/6.png"
import MyComponent from './index'
const settings = {
    slidesToShow: 1.2,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
  };

export default function FromTron() {
  return (
    
    
<Slider {...settings}>      
        <div className="container containerTr">
            <div className="col-12 colTr">
                <div className="row rowTr">
                    </div> <MyComponent
                        imgTr={h1}
                        titleTr="Bánh tráng"/>
                    <MyComponent
                        imgTr={h2}
                        titleTr="Bánh tráng"/>
                    <MyComponent
                        imgTr={h3}
                        titleTr="Bánh tráng"/>
                    <MyComponent
                        imgTr={h4}
                        titleTr="Bánh tráng"/>
                    <MyComponent
                        imgTr={h5}
                        titleTr="Bánh tráng"/>
                    <MyComponent
                        imgTr={h6}
                        titleTr="Bánh tráng"/>
                    </div>
            </div>
</Slider>
       
  )
}


