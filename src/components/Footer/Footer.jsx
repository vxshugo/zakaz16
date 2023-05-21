import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer-container">
              <div className="footer-row">
                  <div className="footer-column">
                      <h3>Біз туралы</h3>
                      <p>Мен студенттерге кез-келген материалды табуды жеңілдету үшін осы сайтты жасадым.</p>
                  </div>
                  <div className="footer-column">
                      <h3>Байланыс</h3>
                      <p>просп. Женис, 68, Астана</p>
                      <p>Сайт: bk-astana.edu.kz</p>
                      <p>Телефон: +7‒778‒040‒81‒71</p>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer