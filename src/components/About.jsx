import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className='container py-5 my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='text-primary fw-bold mb-4'>About Us</h1>
                        <p className='lead mb-4' >
                          We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at Sneakerrr, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <img src='/assets/images/download.png' alt='About Us' height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About