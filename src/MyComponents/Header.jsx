import propTypes from "prop-types";
import { Container, Navbar, Nav, Form } from "react-bootstrap";

const Header = (props)=>
{
    return (
        <div style={props.backgroundStyle}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand style={props.TextStyle} href="#">
                        {props.title}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link style={props.TextStyle} href="#">Home</Nav.Link>
                    </Nav>
                    <div style={{position:"relative", left:"61em"}}>
                        <Form.Check
                            type="switch"
                            style={props.TextStyle}
                            id="custom-switch"
                            onClick={props.handelOnclickForMode}
                            label={`Enable ${(!props.mode)?"Dark":"Light"} Mode`}
                        />
                    </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

Header.defaultProps={title:"Hey"};
Header.propTypes ={title: propTypes.string.isRequired};