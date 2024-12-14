import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import "./index.css"

const Timeline = () => {
    return (
        <div className='py-5'>
            <Container>
                <h4 className='koranOne display-3'>Create timelines, Track progress, assign work and talk with your clients inside one web app!</h4>
                <Row className='mt-5 gy-3'>
                    {
                        [...Array(3)].map((item, index) => {
                            return (
                                <Col md={4}>
                                    <div className='timeLineCard'>
                                        <div className='timeLineIcon'>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22.5 19.6875H24.375V24.375H22.5V19.6875ZM18.75 15H20.625V24.375H18.75V15ZM10.3125 24.375C9.06975 24.3735 7.87834 23.8792 6.99958 23.0004C6.12083 22.1217 5.62649 20.9302 5.625 19.6875H7.5C7.5 20.2438 7.66495 20.7875 7.97399 21.25C8.28303 21.7126 8.72229 22.073 9.2362 22.2859C9.75012 22.4988 10.3156 22.5545 10.8612 22.446C11.4068 22.3374 11.9079 22.0696 12.3012 21.6762C12.6946 21.2829 12.9624 20.7818 13.071 20.2362C13.1795 19.6906 13.1238 19.1251 12.9109 18.6112C12.698 18.0973 12.3376 17.658 11.875 17.349C11.4125 17.0399 10.8688 16.875 10.3125 16.875V15C11.5557 15 12.748 15.4939 13.6271 16.3729C14.5061 17.252 15 18.4443 15 19.6875C15 20.9307 14.5061 22.123 13.6271 23.0021C12.748 23.8811 11.5557 24.375 10.3125 24.375Z" fill="white" />
                                                <path d="M26.25 1.875H3.75C3.25287 1.8755 2.77625 2.0732 2.42472 2.42472C2.0732 2.77625 1.8755 3.25287 1.875 3.75V26.25C1.8755 26.7471 2.0732 27.2238 2.42472 27.5753C2.77625 27.9268 3.25287 28.1245 3.75 28.125H26.25C26.7471 28.1243 27.2235 27.9265 27.575 27.575C27.9265 27.2235 28.1243 26.7471 28.125 26.25V3.75C28.1245 3.25287 27.9268 2.77625 27.5753 2.42472C27.2238 2.0732 26.7471 1.8755 26.25 1.875ZM26.25 10.3125H13.125V3.75H26.25V10.3125ZM11.25 3.75V10.3125H3.75V3.75H11.25ZM3.75 26.25V12.1875H26.25L26.2519 26.25H3.75Z" fill="white" />
                                            </svg>
                                        </div>
                                        <h2 className='timeLineTitle koranOne my-2'>Track Progress</h2>
                                        <p>
                                            Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.
                                        </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    <Col md={12}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <Button size='lg' className='btn shadow-none border-0 btn-feature secondary-bg-color text-black'>I want to Try It</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Timeline
