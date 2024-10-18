import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>
                    <i className="fa-solid fa-users-gear text-white fa-xl" />{' '}
                        Employee Mangement
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header