import React from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
function Filter() {
  return (
    <Container className="search-form">
      <Row>
        <Form>
          <Form.Group>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Search filter"
                aria-label="filter"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <BiSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
}

export default Filter;
