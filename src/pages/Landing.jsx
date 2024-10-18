import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
        <div className='container-fluid p-5'>
            <Row>
                <Col sm={12} md={4}>
                    <div className='pt-5'>
                        <h2>Employee Management</h2>
                        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus totam ipsa explicabo cum aspernatur eveniet hic. Non quisquam voluptate provident veritatis, maiores quod officiis sequi distinctio beatae laudantium eveniet?</p>
                        <div className='d-grid'>
                            <Link to={'/home'} className='btn btn-success'>Let's Go.....</Link>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={8}>
                    <img src="https://img.freepik.com/free-vector/company-employees-planning-task-brainstorming_74855-6316.jpg?w=1800&t=st=1729155483~exp=1729156083~hmac=2787a05bc040971e970f437b724ecb5aa07ace3e0bba0cf59c78132f084b8a1b" alt="" className='img-fluid'/>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default Landing