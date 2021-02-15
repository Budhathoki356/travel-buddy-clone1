import React from 'react'
import Navbar from './Navbar'
import Form from './Form';

const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="wrapper d--flex">
                <div className="header__container">
                    <h1 className="title-heading text-white">
                        Welcome To TravelBuddy
                        <span className="title-heading-main text-white">
                                Find Local <br /> Travellers <br /> Plan Your Trip!
                        </span>
                    </h1>
                    <p className="title-heading text-white">
                        Download our app :
                        <a href=" ">
                            <img className="stores" src="/images/android.svg" alt="" />
                        </a>
                        <a href=" "><img className="stores" src="/images/app-store.svg" alt="" /></a>
                    </p>
                </div>
                <div className="header__container">
                    <Form />
                </div>
            </div>
        </header>
    )
}

export default Header
