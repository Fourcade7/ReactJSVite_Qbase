import { Col, Row } from "react-bootstrap";
import NavbarScreen from "../navbar/navbar";


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { regReq } from "./auth";
import { useEffect, useState } from 'react';

import { motion } from "motion/react"
import { AnimatePresence } from "motion/react"
import { div } from "motion/react-client";

import ProgressBar from 'react-bootstrap/ProgressBar';
import { Alert } from "react-bootstrap";

import { useNavigate } from "react-router-dom";





function RegisterScreen(){
   const [show, setShow] = useState(false);
   const [showAlert, setShowAlert] = useState(false);
   const [title, setTitle] = useState("Register");
   const [username, setusername] = useState("");
   const [surname, setsurname] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [regresult, setregResult] = useState("");
   const [alertVariant, setAlertVariant] = useState("");


   const navigate = useNavigate(); 

    const handleRegister = async () => {
   
    const data = {
      username:username,
      surname:surname,
      phonenumber: phone,
      password: password
    };

    try {
      setShow(true);
      setTitle("Requesting...");


      const response = await regReq(data); // login request yuborildi

      const result= await response.json();
      if(response.ok){
             
              console.log("Response ok: ",result.username);
              setregResult(`${result.username} you are welcome`)
              setAlertVariant("success")

              const timer = setTimeout(() => {
                navigate("/login");
               }, 1000);
               

      }else{
          console.log("Response not ok: ", result);
          setregResult(result.error.meta.target)
          setShowAlert(true);
          setAlertVariant("danger")

      }
      setShow(false);
      setTitle("Register");
     


    } catch (error) {
      console.error("Error:", error);
      setregResult(error)
      setShowAlert(true);
      setAlertVariant("danger")
    }
  };


 

    return(
      <div data-bs-theme="darkx" className="container-fluid vh-100 bg-darkx">
        <div data-bs-theme="darkx" className="container-sm vh-100 w-50 bg-darkx">
                <NavbarScreen></NavbarScreen>
                <div  data-bs-theme="darkx" className="h-75 d-flex align-items-center justify-content-center">
                  <Col  className="col-12 col-xl-6 col-md-8 col-lg-7 col-sm-12">
                      <motion.div layout >
                        <Col className="d-flex align-items-center justify-content-center">
                        <h5 className="text-dark mb-3">{title}</h5>
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
                                 <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                                
                                  {regresult}
                                
                              </Alert>
                          </motion.div>
                        )}


                      </AnimatePresence>

                        <motion.div layout >
                       

                        <Form>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                type="text" placeholder="Enter name"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                                />                                
                              </Form.Group>

                               <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                type="text" placeholder="Enter surname"
                                value={surname}
                                onChange={(e) => setsurname(e.target.value)}
                                />                                
                              </Form.Group>

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

                              <Form.Group className="mb-3">
                                <Form.Control 
                                type="password" 
                                placeholder="Confirm Password"
                                autoComplete="current-password"
                                
                                />
                              </Form.Group>

                              <Form.Group  className="mb-3 text-secondary" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label={"Remember me"} />
                              </Form.Group>
                              <Row className="g-1">
                                <Col className="d-grid">
                                    <Button as={Link} to="/login" variant="outline-primary" type="submit">
                                    Login
                                    </Button>
                                </Col>
                                <Col className="d-grid">
                                    <Button onClick={(e)=>{
                                       e.preventDefault() 
                                       handleRegister();
                                    }} variant="primary" type="submit">
                                    Register
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



export default RegisterScreen;