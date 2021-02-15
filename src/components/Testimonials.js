import React from 'react'

const Testimonials = () => {
    return (
        <section className="testimonial">
            <div className="wrapper">
                <h2 className="testimonial__title">
                    Testimonials
                </h2>
                <div className="testimonial__carousel">
                    <div className="carousel">
                        <div className="slider">
                            <section>
                                <div className="testimonial__description">
                                    Easy to use ! Maya was a local resident of Dubai and
                                    she really helped me find the best spots for buying souvenirs and also advised me to
                                    travel within the town. We have become great friends and I hope I could show her around
                                    when she comes to Delhi. I got to know about travel buddy from my sister and it turned
                                    out to be really useful.
                            </div>
                                <div className="user__profile">
                                    <img src="/images/user1.jpg" alt="" />
                                    <div className="user__details">
                                        <div className="user__name">Shahana Abdulla</div>
                                        <div className="user__post">Travel Buddy User</div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="testimonial__description">
                                    Awesome App, you can use it to connect with travellers all around the globe. truly, a
                                    great experience. Love the map feature. You should try it out!!!
                            </div>
                                <div className="user__profile">
                                    <img src="/images/user2.jpg" alt="" />
                                    <div className="user__details">
                                        <div className="user__name">Soma Ghosh</div>
                                        <div className="user__post">Travel Buddy User</div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="testimonial__description">
                                    It's a very interesting app to get connected with people sharing their travel
                                    experiences, enables us to understand, plan and have some idea about the place we are
                                    visiting.
                            </div>
                                <div className="user__profile">
                                    <img src="/images/user3.jpg" alt="" />
                                    <div className="user__details">
                                        <div className="user__name">Pranav Karwa</div>
                                        <div className="user__post">Travel Buddy User</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="controls">
                        <span className="arrow left"><i className="fa fa-arrow-left"></i></span>
                        <span className="arrow right"><i className="fa fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
