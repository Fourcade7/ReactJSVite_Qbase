import { Alert, Col, Row} from "react-bootstrap";
import NavbarScreen from "../navbar/navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import TabContent from "./tabcontent";



                   



function HomeScreen(){

    return(
        <div>
            <div className="container-fluid bg-primary"><NavbarScreen></NavbarScreen></div>
            <div className="container-sm w-75">
            <TabContent></TabContent>
            </div>
        </div>
    )

}



export {HomeScreen};