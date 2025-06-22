import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { Alert } from 'react-bootstrap';
import { TabScreen1 } from './tabscreen1';
import ListGroup from 'react-bootstrap/ListGroup';
import { TabScreen2 } from './tabscreen2';

function TabContent() {
  return (
    <Tab.Container  id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row className='mt-3 g-1'>
        <Col sm={3}>
          <ListGroup className='rounded-1'>
            <ListGroup.Item action href="#link1">Все события</ListGroup.Item>
            <ListGroup.Item action href="#link2">Пользователи</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
                   
                     <TabScreen1></TabScreen1>
            </Tab.Pane>
            <Tab.Pane  eventKey="#link2">

                     <TabScreen2></TabScreen2>

            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabContent;