import { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge, Col } from 'react-bootstrap';
import { getAllUserPag } from './homeApi';

function TabScreen1() {
  const [active, setActive] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
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
      setUsersResult(result);
    } catch (err) {
      console.error(err);
      setError("Ma'lumot olishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
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
    );
  }

  // UI
  return (
    <div style={{ height: '80vh' }} className='bg-primar d-flex flex-column'>

      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}

      {!loading && usersResult && (
        <ListGroup as="ol" numbered>
          {usersResult.users.map((user, index) => (
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={index}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{user.username} {user.surname}</div>
                {user.phonenumber}
              </div>
              <Badge bg="primary" pill>{user.id}</Badge>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}

      <Col></Col>
      <Pagination size="md">{items}</Pagination>
    </div>
  );
}

export { TabScreen1 };
