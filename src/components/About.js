import React from 'react'

const About = () => {
    return (
        <section className="about">
            <div className="wrapper">
                <div className="about__top">
                    <img src="/images/mob.png" alt="" />
                    <div className="about__right">
                        <h1 className="about__title text-black">About Travel Buddy App</h1>
                        <p className="about__info text-black-light">There is an itinerary amongst all of us and the
                        idea is to create a crowd sourced platform of
                        local expertise identified as travel buddies.
                        These Travel Buddies are people who are willing to
                        show travellers stuff - the way it is supposed to be seen -
                        the local way! So download
                        the app &
                        Ask, Advice, Share Stories and Make Buddies and most importantly Travel Well!
                        </p>
                    </div>
                </div>
                <div className="about__bottom">
                    <div className="features__card">
                        <i className="fa fa-image fa-3x"></i>
                        <h3 className="feature__title">Travel Feed</h3>
                        <p className="feature__description">
                            Get inspired to Travel when you are on the feed by seeing pics from fellow travelers.
                            Post your own story, Ask about a destination or look for travel buddies for your next
                            destination.
                    </p>
                    </div>
                    <div className="features__card">
                        <i className="fa fa-map-marker-alt fa-3x"></i>
                        <h3 className="feature__title">Location Based</h3>
                        <p className="feature__description">
                            View Travelers within your own location or for any location across the World.
                            Connect with them.
                    </p>
                    </div>
                    <div className="features__card">
                        <i className="far fa-shield fa-3x"></i>
                        <h3 className="feature__title">Saftey First</h3>
                        <p className="feature__description">
                            Rate a traveler, review them, report a troublemaker,
                            Block any Chat - our app has some of the
                            most robust safety features amongst all Socio Travel Apps.
                    </p>
                    </div>
                    <div className="features__card">
                        <i className="far fa-bookmark fa-3x"></i>
                        <h3 className="feature__title">Bookmark</h3>
                        <p className="feature__description">
                            Like a Post? Bookmark it, and create your wishlist of destinations and view them later.
                        </p>
                    </div>
                    <div className="features__card">
                        <i className="fa fa-list-alt fa-3x"></i>
                        <h3 className="feature__title">List Your Travel Service</h3>
                        <p className="feature__description">
                            Are you a travel provider? List your travel service and connect with travelers. Show your local
                            expertise and host them in future.
                        </p>
                    </div>
                    <div className="features__card">
                        <i className="fa fa-search fa-3x"></i>
                        <h3 className="feature__title">Location Based Search</h3>
                        <p className="feature__description">
                            Are you a travel provider? List your travel
                            servi and connect with travelers. Show your local
                            expertise and host them in future.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
