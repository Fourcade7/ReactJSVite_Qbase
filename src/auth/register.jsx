import { Col, Row } from "react-bootstrap";
import NavbarScreen from "../navbar/navbar";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function RegisterForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control type="text" placeholder="Surname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        
        <Form.Control type="text" placeholder="Phone number" />
         <Form.Text className="text-muted">
          We'll never share your phone-number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Reset Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>

      <Row className="g-1">
        <Col className="d-grid">
            <Button as={Link} to="/login" variant="outline-primary" type="submit">
            Login
            </Button>
        </Col>
         <Col className="d-grid">
            <Button  variant="primary" type="submit">
            Register
            </Button>
        </Col>
      </Row>
      
    </Form>
  );
}


function RegisterScreen(){

    return(
        <div className="container-sm vh-100">
                <NavbarScreen></NavbarScreen>
                <div className="h-75 d-flex align-items-center justify-content-center">
                    <Col className="col-12 col-xl-4 col-md-6 col-lg-6 col-sm-12">
                     <Col className="d-flex align-items-center justify-content-center">
                     <h5>Register</h5>
                    </Col>
                    <RegisterForm></RegisterForm>
                    </Col>
                </div>
        </div>
    )

}


export default RegisterScreen;