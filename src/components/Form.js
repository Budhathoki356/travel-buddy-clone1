import React from 'react'

const Form = () => {
    return (
        <form className="form">
            <h2 className="text-black">Sign in</h2>
            <p className="text-black">Choose one of following signing methods.</p>
            <hr />
            <div className="from__group">
                <input className="form__input" type="email" placeholder="Enter your email here" />
            </div>
            <div className="from__group">
                <input className="form__input" type="password" placeholder="Enter your password here" />
            </div>

            <a href=" ">Forget Password?</a>

            <div className="form__btn">
                <button className="btn btn__primary" type="submit">Sign up</button>
                <button className="btn btn__primary--outline" type="submit">Sign in</button>
            </div>
            <span> Or </span>
            <div className="social__media">
                <a href=" "><img src="/images/facebook-logo.png" alt="" /></a>
                <a href=" "><img src="/images/google-logo.png" alt="" /></a>
            </div>
        </form>
    )
}

export default Form
