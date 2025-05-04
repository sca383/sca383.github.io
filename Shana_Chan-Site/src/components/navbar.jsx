import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNavBar(){
    return (
        <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href ="#home">Shana Chan</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#surprise">Surprise</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>    
    )
}

export default SiteNavBar;