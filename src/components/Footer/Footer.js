import React from 'react'

const Footer = () => (
  <footer>
    <div className="twelve columns">
      <ul className="social-links">
        <li><a href="mailto:"><i className="fa fa-envelope"></i></a></li>
        <li><a href=""><i className="fa fa-linkedin"></i></a></li>
        <li><a href=""><i className="fa fa-fw"><strong className="fa-quora">Q</strong></i></a></li>
        <li><a href=""><i className="fa fa-stack-overflow"></i></a></li>
        <li><a href="https://github.com/"><i className="fa fa-github"></i></a></li>
        <li><a href=""><i className="fa fa-docker"></i></a></li>        
      </ul>
      <ul className="copyright">
        <li>This site is developed in React.js by Silvano Amaral
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer