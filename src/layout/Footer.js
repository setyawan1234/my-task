import React from 'react'
import '../styles/Footer.css'
import fb from '../styles/img/facebook-official.png'
import tweet from '../styles/img/twitter.png'
export const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright &copy; 2016 PT.Company</p>
      <div className="footer icon">
        <img src={fb}/>
        <img src={tweet}/>
      </div>
    </div>
  )
}
