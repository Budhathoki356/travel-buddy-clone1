import React from 'react'

const Footer = () => {
    return (
        <section class="footer">
        <div class="wrapper">
            <div class="footer__top">
                <p class="footer__left">
                    Travel Buddy is a Travel Social Network that exists on mweb and app platforms. The idea is to form a
                    crowd sourced platform of travelers who between themselves will share tips, advice and suggestions
                    about destinations , experiences and itineraries
                </p>
                <div class="footer__mid">
                    <h5>Contact</h5>
                    <span>Kathmandu, Nepal</span>
                    <p>for any query send mail at info@gmail.com</p>
                </div>
                <div class="footer__right">
                    <h5>Subscribe to Our Newsletter</h5>
                    <span>Please submit your email to subscribe to our new updates.</span>
                    <form class="footer__form">
                        <input type="text" placeholder="Email" />
                        <button type="submit">Submit</button>
                        <div class="social__links">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-twitter"></i>
                        </div>
                    </form>
                </div>
            </div>
            <div class="footer__middle">
                &copy; Copyright Travel Buddy 2020-2021.
            </div>
            <div class="footer__bottom">
                Made with love in Nepal.
            </div>
        </div>
    </section>
    )
}

export default Footer
