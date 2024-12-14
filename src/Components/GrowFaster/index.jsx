import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import GrowFasterImage from "../../assets/images/grow-faster.png"
import "./index.css"



const GrowFaster = () => {
    return (
        <Container>
            <Row className='py-5'>
                <Col md={6}>
                    <Image src={GrowFasterImage} alt='' className='img-fluid' />
                </Col>
                <Col md={6}>
                    <div>
                        <h2 className='koranOne display-6'>Grow faster than your compititors</h2>
                        <p className='fs-5'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet. </p>
                        <div className='d-flex justify-content-start align-items-start gap-3'>
                            <div className='grow-icon d-flex justify-content-center align-items-center'>
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.25 15.5625V15.5H3.31625C2.94697 15.4998 2.58127 15.5724 2.24005 15.7136C1.89883 15.8548 1.58877 16.0619 1.32759 16.323C1.06641 16.584 0.859224 16.894 0.717867 17.2351C0.57651 17.5763 0.503754 17.942 0.503754 18.3113V19.0338C0.503754 20.1488 0.903754 21.2288 1.62875 22.0775C3.585 24.37 6.5675 25.5025 10.5 25.5025C10.9475 25.5025 11.3825 25.4863 11.8038 25.4575C11.7677 25.2654 11.7497 25.0704 11.75 24.875V23.5813C11.3488 23.6113 10.9325 23.6263 10.5 23.6263C7.0775 23.6263 4.62 22.6938 3.05375 20.86C2.61822 20.3507 2.37885 19.7026 2.37875 19.0325V18.3113C2.37875 18.0626 2.47753 17.8242 2.65334 17.6483C2.82916 17.4725 3.06761 17.3738 3.31625 17.3738H12.01C12.211 16.9145 12.5194 16.5103 12.9093 16.1951C13.2991 15.8799 13.7589 15.663 14.25 15.5625ZM10.5 0.506256C11.3208 0.506256 12.1335 0.667917 12.8918 0.982009C13.6501 1.2961 14.3391 1.75647 14.9194 2.33684C15.4998 2.9172 15.9602 3.6062 16.2743 4.36448C16.5883 5.12277 16.75 5.93549 16.75 6.75626C16.75 7.57702 16.5883 8.38974 16.2743 9.14803C15.9602 9.90631 15.4998 10.5953 14.9194 11.1757C14.3391 11.756 13.6501 12.2164 12.8918 12.5305C12.1335 12.8446 11.3208 13.0063 10.5 13.0063C8.8424 13.0063 7.25269 12.3478 6.08059 11.1757C4.90848 10.0036 4.25 8.41386 4.25 6.75626C4.25 5.09865 4.90848 3.50894 6.08059 2.33684C7.25269 1.16474 8.8424 0.506256 10.5 0.506256ZM10.5 2.38126C9.92547 2.38126 9.35656 2.49442 8.82576 2.71428C8.29496 2.93415 7.81267 3.25641 7.40641 3.66266C7.00015 4.06892 6.6779 4.55122 6.45803 5.08202C6.23817 5.61282 6.125 6.18172 6.125 6.75626C6.125 7.33079 6.23817 7.8997 6.45803 8.4305C6.6779 8.9613 7.00015 9.44359 7.40641 9.84985C7.81267 10.2561 8.29496 10.5784 8.82576 10.7982C9.35656 11.0181 9.92547 11.1313 10.5 11.1313C11.6603 11.1313 12.7731 10.6703 13.5936 9.84985C14.4141 9.02938 14.875 7.91658 14.875 6.75626C14.875 5.59593 14.4141 4.48314 13.5936 3.66266C12.7731 2.84219 11.6603 2.38126 10.5 2.38126ZM15.5 16.75H14.875C14.3777 16.75 13.9008 16.9475 13.5492 17.2992C13.1975 17.6508 13 18.1277 13 18.625V24.875C13 25.3723 13.1975 25.8492 13.5492 26.2008C13.9008 26.5525 14.3777 26.75 14.875 26.75H24.875C25.3723 26.75 25.8492 26.5525 26.2008 26.2008C26.5525 25.8492 26.75 25.3723 26.75 24.875V18.625C26.75 18.1277 26.5525 17.6508 26.2008 17.2992C25.8492 16.9475 25.3723 16.75 24.875 16.75H24.25V15.1875C24.25 14.6073 24.0195 14.0509 23.6093 13.6407C23.1991 13.2305 22.6427 13 22.0625 13H17.6875C17.1073 13 16.5509 13.2305 16.1407 13.6407C15.7305 14.0509 15.5 14.6073 15.5 15.1875V16.75ZM17.375 15.1875C17.375 15.1046 17.4079 15.0251 17.4665 14.9665C17.5251 14.9079 17.6046 14.875 17.6875 14.875H22.0625C22.1454 14.875 22.2249 14.9079 22.2835 14.9665C22.3421 15.0251 22.375 15.1046 22.375 15.1875V16.75H17.375V15.1875Z" fill="white" />
                                </svg>
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <h4 className='koranOne'>Manage all your work</h4>
                                <p className='fs-5'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className='d-flex justify-content-start align-items-start gap-3'>
                            <div className='grow-icon d-flex justify-content-center align-items-center'>
                                <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.875 24.5H28.125V26.25H1.875V24.5ZM25.3125 9.62499C25.5611 9.62499 25.7996 9.53281 25.9754 9.36871C26.1512 9.20462 26.25 8.98206 26.25 8.74999V6.12499C26.2499 5.94517 26.1905 5.76974 26.0798 5.62256C25.969 5.47539 25.8124 5.36363 25.6313 5.30249L15.3188 1.80249C15.1128 1.73299 14.8872 1.73299 14.6812 1.80249L4.36875 5.30249C4.18756 5.36363 4.03095 5.47539 3.92024 5.62256C3.80952 5.76974 3.75008 5.94517 3.75 6.12499V8.74999C3.75 8.98206 3.84877 9.20462 4.02459 9.36871C4.2004 9.53281 4.43886 9.62499 4.6875 9.62499H5.625V21H3.75V22.75H26.25V21H24.375V9.62499H25.3125ZM5.625 6.73749L15 3.55249L24.375 6.73749V7.87499H5.625V6.73749ZM16.875 21H13.125V9.62499H16.875V21ZM7.5 9.62499H11.25V21H7.5V9.62499ZM22.5 21H18.75V9.62499H22.5V21Z" fill="white" />
                                </svg>
                            </div>
                            <div className='d-flex flex-column justify-content-start align-items-start'>
                                <h4 className='koranOne'>Scale it to the moon</h4>
                                <p className='fs-5'>Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default GrowFaster
