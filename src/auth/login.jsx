import { Col, Row } from "react-bootstrap";
import NavbarScreen from "../navbar/navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Alert } from "react-bootstrap";

import { useEffect, useState } from 'react';

import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"

import loginReq from "./auth";
import { div } from "motion/react-client";



function LoginForm(props) {

   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");

    useEffect(() => {
    const timer = setTimeout(() => {
      //setShow(true); 945944477
    }, 700); // 1 sekunddan keyin ko‘rsatadi

    return () => clearTimeout(timer);
  }, []);

    const handleLogin = async (e) => {
    e.preventDefault();
    
    props.clickable(); // show va title uchun
    
    const data = {
      phone: phone,
      password: password
    };

    try {
      const res = await loginReq(data); // login request yuborildi
      console.log("Login javobi:", res);

      // token bo‘lsa localStorage ga saqlang (ixtiyoriy)
      if (res.token) {
        localStorage.setItem("token", res.token);
      }

    } catch (err) {
      console.error("Xatolik:", err);
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        type="phone" placeholder="Enter phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
         />
        <Form.Text className="text-muted">
          We'll never share your phone with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control 
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={"Remember me"} />
      </Form.Group>
      <Row className="g-1">
        <Col className="d-grid">
            <Button as={Link} to="/register" variant="outline-primary" type="submit">
            Register
            </Button>
        </Col>
        <Col className="d-grid">
            <Button onClick={props.clickable} variant="primary" type="submit">
            Login
            </Button>
        </Col>
      </Row>
    </Form>
  );
}


function LoginScreen(){
   const [show, setShow] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [title, setTitle] = useState("Login");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [loginresult, setloginResult] = useState("");


    const handleLogin = async () => {
   
    const data = {
      phonenumber: phone,
      password: password
    };

    try {
      setShow(true);
      setTitle("Requesting...");
      const response = await loginReq(data); // login request yuborildi
      const result= await response.json();
      if(response.ok){
             
              console.log("Response ok: ",result.accessToken);

      }else{
          console.log("Response not ok: ", result.message);
          setloginResult(result.message)
          setShowAlert(true);
      }
      setShow(false);
      setTitle("Login");
     


    } catch (err) {
      console.error("Xatolik:", err);
    }
  };


 

    return(
      <div data-bs-theme="dark" className="container-fluid vh-100 bg-dark">
        <div data-bs-theme="dark" className="container-sm vh-100 bg-dark">
                <NavbarScreen></NavbarScreen>
                <div  data-bs-theme="dark" className="h-75 d-flex align-items-center justify-content-center">
                  <Col  className="col-12 col-xl-4 col-md-6 col-lg-6 col-sm-12">
                      <motion.div layout >
                        <Col className="d-flex align-items-center justify-content-center">
                        <h5 className="text-white mb-3">{title}</h5>
                        </Col>
                      </motion.div>
                      <AnimatePresence mode="wait">
                        {show && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                          
                          <ProgressBar  className="mb-3" animated variant="primary" now={100} />
                         
                          </motion.div>
                        )}
                        {showAlert && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                               <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                                
                                  {loginresult}
                                
                              </Alert>
                          </motion.div>
                        )}


                      </AnimatePresence>

                        <motion.div layout >
                       

                        <Form>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                type="phone" placeholder="Enter phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                />
                                <Form.Text className="text-muted">
                                  We'll never share your phone with anyone else.
                                </Form.Text>
                              </Form.Group>

                              <Form.Group className="mb-3">
                                <Form.Control 
                                type="password" 
                                placeholder="Password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                              </Form.Group>
                              <Form.Group  className="mb-3 text-secondary" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label={"Remember me"} />
                              </Form.Group>
                              <Row className="g-1">
                                <Col className="d-grid">
                                    <Button as={Link} to="/register" variant="outline-primary" type="submit">
                                    Register
                                    </Button>
                                </Col>
                                <Col className="d-grid">
                                    <Button onClick={(e)=>{
                                       e.preventDefault() 
                                       handleLogin();
                                      
                                    }} variant="primary" type="submit">
                                    Login
                                    </Button>
                                </Col>
                              </Row>
                            </Form>
                        </motion.div>
                   
                    
                    </Col>
                </div>
        </div>
        </div>
    )

}


export default LoginScreen;