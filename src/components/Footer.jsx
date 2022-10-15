import React from 'react'
import '../App'

const Footer = () => {
  return (
    <div className="Footer_container">
      <div className="line line-1"></div>
      <div className="line line-2"></div>
      <div className="line line-3"></div>
      <div className="menu">
    <ul>
        <li><a href="https://www.linkedin.com/in/jorge-iván-monterrosa-narváez-15b01833" target="_blank"><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://github.com/Jmontenar/" target="_blank"><i className="fa-brands fa-github"></i></a></li>
        <li><a href="https://wa.me/573148539604?text=Cuéntame%20como%20quieres%20tu%20web%20%20site" target="_blank"><i class="fa-brands fa-whatsapp"></i></a></li>
    </ul>
    </div>
    <p className="Footer_author">Created by: Jorge Monterrosa Narváez</p>
    </div>
  )
}

export default Footer