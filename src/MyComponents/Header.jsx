import propTypes from "prop-types";
import { Container, Navbar, Nav, Form } from "react-bootstrap";

const Header = (props)=>
{
    const atagStyle = 
    {
        textDecoration: "none",
        fontSize:"17px",
        margin:"3px 25px 0px 5px",
        color: props.TextStyle.color
    }
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
                        <a style={atagStyle} href="#">Home</a>
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