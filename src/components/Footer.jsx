import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container-fluid p-5 bg-light'>
                <Row>
                    <Col sm={12} md={5}>
                        <h2>Employee Management</h2>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus totam ipsa explicabo cum aspernatur eveniet hic. Non quisquam voluptate provident veritatis, maiores quod officiis sequi distinctio beatae laudantium eveniet?</p>
                    </Col>
                    <Col sm={12} md={2}>
                        <h2>Links</h2>
                        <div className='d-flex flex-column'>
                            <Link to={'/'}>Landing</Link>
                            <Link to={'/home'}>Home</Link>
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <h2>Feedback</h2>
                        <input type="text" className='form-control my-3'/>
                        <button className='btn btn-primary'>Send</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer