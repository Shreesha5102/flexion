import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  InputGroup,
  FloatingLabel,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function AddUser(props) {
  const [NewUser, setNewUser] = useState(
    props.edit === true
      ? props.user
      : {
          CandidateName: "",
          BirthDate: "",
          SSN: "",
          Email: "",
          VendorName: "",
          IsActive: "",
        }
  );
  const [CandidateName, setCandidateName] = useState(NewUser?.CandidateName);
  const [Email, setEmail] = useState(NewUser?.Email);
  const [SSN, setSSN] = useState(NewUser?.SSN);
  const [VendorName, setVendorName] = useState(NewUser?.VendorName);
  const [IsActive, setIsActive] = useState(NewUser?.IsActive);
  const [DOB, setDOB] = useState("");
  const [BirthDate, setBirthDate] = useState(NewUser?.BirthDate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      CandidateName: CandidateName,
      BirthDate: BirthDate,
      SSN: SSN,
      Email: Email,
      VendorName: VendorName,
      IsActive: IsActive,
    };
    setNewUser(newUser);
    const users = props.data;
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(props.data));
    console.log(localStorage.getItem("users"));
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "CandidateName":
        setCandidateName(event.target.value);
        break;
      case "Email":
        setEmail(event.target.value);
        break;
      case "SSN":
        setSSN(event.target.value);
        break;
      case "DOB":
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const d = new Date(event.target.value);
        const birthdate = months[d.getMonth()] + " " + d.getDate();
        setBirthDate(birthdate);
        setDOB(event.target.value);
        console.log("DOB:", event.target.value);
        console.log("DOB:", birthdate);
        break;
      case "VendorName":
        setVendorName(event.target.value);
        break;
      case "IsActive":
        setIsActive(event.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(props.data));
    console.log(localStorage.getItem("users"));
  }, []);

  return (
    <Container className="create-User">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <InputGroup className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Candidate Name"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Ex: Narendar Modi"
                    aria-label="Name"
                    name="CandidateName"
                    value={CandidateName}
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <InputGroup className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Ex: flexiontechsupport@zoho.com"
                    aria-label="Email"
                    name="Email"
                    value={Email}
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <InputGroup className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="SSN"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Ex: 1234"
                    aria-label="SSN"
                    name="SSN"
                    value={SSN}
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <InputGroup className="mb-3">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Vendor Name"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Ex: XYZ co"
                    aria-label="VendorName"
                    name="VendorName"
                    value={VendorName}
                    aria-describedby="basic-addon2"
                    onChange={handleChange}
                  />
                </FloatingLabel>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group>
              <Form.Group controlId="dob">
                <Form.Label>BirthDate</Form.Label>
                <Form.Control
                  type="date"
                  name="DOB"
                  value={DOB}
                  placeholder="Date of Birth"
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group>
              <Row>
                <Form.Label>IsActive</Form.Label>
              </Row>
              <Form.Check
                inline
                type="radio"
                name="IsActive"
                label="Yes"
                value="Yes"
                onChange={handleChange}
              />
              <Form.Check
                inline
                type="radio"
                name="IsActive"
                label="No"
                value="No"
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Button type="submit" variant="primary">
              {/* {props.edit? "Confirm Edit": "Create User"} */}
              Create User
            </Button>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Form>
    </Container>
  );
}

export default AddUser;
