import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import HeroImage from "../../assets/images/hero-image.png"

const Hero = () => {
    return (
        <div className='primary-bg-color py-5'>
            <Container className='py-5'>
                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <h3 className='text-white koranOne display-5'>Manage and track all your Work Inside one app</h3>
                        <p className='text-white'>Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et. Pellentesque in ipsum id orci porta dapibus</p>
                        <Button size='lg' className='btn shadow-none border-0 btn-feature secondary-bg-color text-black'>Learn More</Button>
                    </Col>
                    <Col lg={6}>
                        <Image src={HeroImage} alt='' className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
