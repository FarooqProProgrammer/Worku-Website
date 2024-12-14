import React from 'react'
import { Container, Image } from 'react-bootstrap'
import "./index.css"

const Testimonial = () => {
    return (
        <div className='primary-bg-color py-5'>
            <Container>
                <h3 className='text-white display-4 koranOne'>“This app is amazing Now i’m able to manage all my freelancing and agency work under one place. it make my life easy.”</h3>
                <div className='d-flex justify-content-start gap-3 align-items-center'>
                    <Image
                        src='https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D'
                        className='user-icon'
                    />
                    <div>
                        <h3 className='text-white fs-5'>ASHUTOSH MEHTA</h3>
                        <p className='text-white'>Charted Accountant</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Testimonial
