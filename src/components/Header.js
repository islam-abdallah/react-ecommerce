import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar className="bg-body-tertiary justify-content-between al">
            <Container>
                <div inline>
                    <Row>
                        <Col>
                            <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        </Col>
                        <Col>
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Col>
                    </Row>
                </div>
                <div inline>
                    <Row>
                        <Col xs="auto">
                            <Nav.Link href="#home">Cart</Nav.Link>
                        </Col>
                        <Col xs="auto">
                            <Nav.Link href="#home">Profile</Nav.Link>
                        </Col>
                        <Col xs="auto">
                            <Nav.Link href="#link">Logout</Nav.Link>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Navbar>

    )
}
