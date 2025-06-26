import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Col, Row } from 'react-bootstrap';
import { getAllUserPag } from './homeApi';

import Spinner from 'react-bootstrap/Spinner';
import { Alert } from 'react-bootstrap';

function TabScreen1() {
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [allPage, setAllPage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usersResult, setUsersResult] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const response = await getAllUserPag(page, limit);
      const result = await response.json();
      console.log(result);
      setAllPage(result.allpages)
      setUsersResult(result);
    } catch (err) {
      console.error(err);
      setError("Что-то сломалось.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  let items = [];
  for (let number = 1; number <= allPage; number++) {
    items.push(
      <Col>
      <Pagination.Item
        onClick={() => {
          setActive(number);
          setPage(number); // page ham yangilansin
        }}
        key={number}
        active={number === active}
      >
        {number}
      </Pagination.Item>
      </Col>
    );
  }

  // UI
  return (
    <div style={{ height: '80vh' }} className='bg-primar d-flex flex-column'>

      {loading && 
      <div className=' p-4 h-100 d-flex flex-column align-items-center justify-content-center'> 
              <Spinner size='50' animation="border" variant="primary" />
              <h6 className='mt-3'>Загрузка...</h6>
        </div>}
      {error && 
        <Alert variant="danger">
          {error}
        </Alert>
      }

      {!loading && usersResult && (
        <ListGroup as="ol">
          {usersResult.users.map((user, index) => (
            <ListGroup.Item className="d-flex justify-content-between align-items-start" key={index}
             action onClick={()=>{console.log(user.username)}}
              
            >
              
              <div className="ms-2 me-auto">
                <div className="fw-bold">{user.username} {user.surname}</div>
                 <div className='w-100'>
                    <div className=''>{user.phonenumber}</div>
                 </div>
                
              </div>
              <div className="ms-2 d-fle flex-column">
                
                  <div><Badge bg="success" pill> {user.sex === 1 ? "М" : user.sex === 0 ? "Ж" : "Неизвестный"}</Badge></div> 
                   <div><Badge bg="success " pill>Событий {user._count.partylist}</Badge></div> 
                  
                
                
              </div>
               <div className="ms-2 d-flex flex-column justify-content-end align-items-end">
                
                  <div> <Badge bg="primary" pill>id {user.id}</Badge></div> 
                   <div><Badge bg="success" pill>active</Badge></div> 
                  
                
                
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <Col></Col>
      <Pagination className='' size="md"><Row className='row-cols-auto gx-1'>{items}</Row></Pagination>
        
    </div>
  );
}

export { TabScreen1 };
