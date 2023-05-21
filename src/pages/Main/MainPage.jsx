import React from 'react'
import Catalog from '../../components/Catalog/Catalog'
import Footer from '../../components/Footer/Footer'
import Main from '../../components/main/Main'
import Navbar from '../../components/navbar/Navbar'
import "./mainPage.css"
const MainPage = () => {
    return (
        <div>
            <Main />
            <div className='Catalog__block'>
                <h2 style={{color: "#FFF"}}>Жинақтар</h2>
                <div className='catalog__flex'>
                    <Catalog />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage