import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Pagination,
  Modal,
} from "react-bootstrap";
import { BiPencil, BiTrash } from "react-icons/bi";

import userImg from "../../static/images/User-image.png";
import AddUser from "../create/addUser";
//Loading json data

function PaginationItem(props) {
  const pages = props.pages;

  const items = [];
  for (let index = 0; index < pages; index++) {
    items.push(<Pagination.Item>{index + 1}</Pagination.Item>);
  }

  return items;
}

function EditUserModal(props) {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);

  <Modal
    show={show}
    // user={users[userIndex]}
    onHide={handleClose}
    style={{ display: "block", position: "initial" }}
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <AddUser edit={true} data={users} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </Modal>;

  return <></>;
}

function Content(props) {
  const [users, setUsers] = useState([]);
  const [pages, setPages] = useState(0);
  const [show, setShow] = useState(false);
  // const [userIndex, setUserIndex] = useState(-1);

  useEffect(() => {
    setUsers(props.data);
    if (users.length > 0) {
      const totalPages = Math.floor(users.length / 4);
      setPages(totalPages);
    }
  }, []);

  const editUser = (index) => {
    setShow(true);
    // setUserIndex(index);
  };

  return (
    <Container className="grid">
      <Pagination>
        <Pagination.Prev />
        <PaginationItem pages={pages} />
        <Pagination.Next />
      </Pagination>
      <Row>
        {users.map((user, index) => {
          return (
            <Col sm={6}>
              <Card>
                {/* <Card.Img variant="top" src={userImg} /> */}
                <Card.Body>
                  <Card.Title>{user?.CandidateName}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{user?.BirthDate}</ListGroup.Item>
                  <ListGroup.Item>{user?.SSN}</ListGroup.Item>
                  <ListGroup.Item>{user?.Email}</ListGroup.Item>
                  <ListGroup.Item>{user?.VendorName}</ListGroup.Item>
                  <ListGroup.Item>{user?.IsActive}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button
                    variant="secondary"
                    onClick={(index) => editUser(index)}
                  >
                    <BiPencil />
                  </Button>
                  <Button variant="danger">
                    <BiTrash />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Content;
