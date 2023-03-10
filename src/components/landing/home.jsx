import React from "react";
import { Container, Form, InputGroup, Button, Row, Col } from "react-bootstrap";

import Filter from "./searchAndSort";
import Content from "./grid";
function Home(props) {
  return (
    <Container fluid>
      <Row>
        <Filter />
        <Content data={props.data} />
      </Row>
    </Container>
  );
}

export default Home;
