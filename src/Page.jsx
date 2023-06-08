import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Contents from './Content.jsx'

function NavBar() {
    return (
       <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='/'>Employee Management Application</Navbar.Brand>
            <Nav>
                <Nav.Link href='/employees'>All Employees</Nav.Link>
                <Nav.Link href='/report'>Report</Nav.Link>
            </Nav>
            
       </Navbar>
    )
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <Contents />
        </div>
    )
}