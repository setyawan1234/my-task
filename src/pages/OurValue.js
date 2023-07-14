import React from 'react'
import icon1 from '../styles/img/lightbulb-o.png'
import icon2 from '../styles/img/bank.png'
import icon3 from '../styles/img/balance-scale.png'
import '../styles/OurValue.css'
export const OurValue = () => {
  return (
    
    <div>
        <h1>
            OUR VALUE
        </h1>

        <div className="container-box">
            <div className="box red">
                <img src={icon1} alt="icon1" />
                <h2>INNOVATIVE</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className="box green">
                <img src={icon2} alt="icon2" />
                <h2>LOYALTY</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>

            <div className="box blue">
                <img src={icon3} alt="icon3" />
                <h2>RESPECT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
        </div>
    </div>
  )
}
