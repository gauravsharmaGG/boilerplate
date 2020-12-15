import React from 'react'; // , { useEffect }
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Image,
  // Card, Form, Button
} from 'react-bootstrap';
import { withRouter } from 'react-router';
import Sidebar from '../Sidebar';
import { getUsersData } from '../../redux/action/Dashboard';
import { useDispatch, useSelector } from 'react-redux';

import './index.scss';

const Dash = (props) => {
  const dispatch = useDispatch();

  /************ In case API needs to be called on Mounting */
  //   useEffect(() => {
  //     dispatch(getUsersData());
  //   }, [dispatch]);

  /************ In case verify whether users data is available */
  const users = useSelector((state) => state.user.users);
  //     useEffect(() => {
  //       !users && dispatch(getUsersData());
  //     }, [users, dispatch]);

  const getUsers = () => !users && dispatch(getUsersData());

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2} id='sidebar-wrapper'>
            <Sidebar showBackground={true} />
          </Col>
          <Col xs={10} id='page-content-wrapper'>
            this is the dashboard component
            <div className='mt-4'>
              <Button variant='outline-secondary' onClick={getUsers}>
                Get Users Data
              </Button>{' '}
            </div>
            {users && (
              <div className='mt-4'>
                <Table striped bordered hover variant='dark'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Avatar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user) => (
                        <tr>
                          <td>{user.id}</td>
                          <td>{user.first_name}</td>
                          <td>{user.last_name}</td>
                          <td>
                            <Image
                              src={`${user.avatar}`}
                              roundedCircle
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
const Dashboard = withRouter(Dash);
export default Dashboard;
