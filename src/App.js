import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/landing/home";
import AddUser from "./components/create/addUser";

import data from "./static/data/CandidateSample.json";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  localStorage.setItem("users", JSON.stringify(users));
  useEffect(() => {
    setUsers(data);
    console.log(localStorage.getItem("users"));
  }, []);

  return (
    <Container fluid>
      <Router>
        <Container className="App">
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Routes>
                <Route path="/home" element={<Home data={data} />} />
                <Route
                  path="/add"
                  element={<AddUser data={data} edit={false} />}
                />
                <Route
                  path="/edit"
                  element={<AddUser data={data} edit={true} />}
                />
              </Routes>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
