import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

 const About = () => {
    return (
        <Fragment>
                <Link to="/">Back to home</Link>
            <h2>
                Contact us and follow us on these platforms.
                <i className="fas fa-facebook"/>
                <i className="fas fa-instagram"/>
                <i className="fas fa-twitter"/>
                <i className="fas fa-youtube"/>
            </h2>
        </Fragment>
    )
}

export default About;