import React from 'react';
import './style.css';


interface TronProps {
    imgTr: string;
    titleTr: string;
  }
  
  
const MyComponent: React.FC<TronProps> = ({
    imgTr,
    titleTr,
}) => {
    return (
            <div className="col-2" >
                <div className="text-center textTr">
                    <img className="radidusImages" src= {imgTr} alt="image1"/> 
                    <p className='custorTitle '>{titleTr}</p>
                </div>
            </div>
     );
};

export default MyComponent;
