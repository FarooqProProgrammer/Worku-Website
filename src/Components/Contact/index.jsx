import React from 'react'
import { Button } from 'react-bootstrap'
import ContactImage from "../../assets/images/contact.png"

const Contact = () => {
    return (
        <div className='py-10'>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6">
                        <h5 className='display-5 koranOne'>Signup for early access offer!</h5>
                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi, pretium ut lacinia in, elementum id enim</p>
                        <input type="text" className='form-control py-3 my-3' placeholder='Ross Martin' />
                        <input type="text" className='form-control py-3 my-3' placeholder='rossmartin@gmail.com' />
                        <Button size='lg' className='btn shadow-none border-0 btn-feature secondary-bg-color text-black'>Submit</Button>

                    </div>
                    <div className="col-lg-6">
                        <img src={ContactImage} className='img-fluid' alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
