import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Landing = () => {
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [units, setUnits] = useState(1);
  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");

  const itemList = [
    { id: 1, name: "Instant Print Camera", price: 40000 },
    { id: 2, name: "Indoor Potted plant", price: 7000 },
    { id: 3, name: "Sandwish Maker ", price: 10000 },
    { id: 4, name: "Air Fryer", price: 30000 },
    { id: 5, name: "Sound System", price: 30000 },
    { id: 6, name: "Cash Gift", price: 5000 },
    { id: 7, name: "Microwave", price: 20000 },
    { id: 8, name: "Pressure Cooker", price: 15000 },
    { id: 9, name: "Indoor bicycle", price: 20000 },
    { id: 9, name: "Washing machine", price: 40000 },
    { id: 9, name: "Mixer", price: 10000 },
    { id: 9, name: "Knife", price: 10000 },
    { id: 9, name: "Cutting board", price: 7000 },
    { id: 9, name: "Wine glasses", price: 10000 },
    { id: 9, name: "Double sided grill pan", price: 16000 },
    { id: 9, name: "Teloscope", price: 30000 },
    { id: 9, name: "Piano", price: 60000 },
  ];

  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const handleUnitChange = (event) => setUnits(event.target.value);

  const handleChangeUsername = (event) => setUserName(event.target.value);

  const handleChangeUserMobile = (event) => setUserMobile(event.target.value);

  const increaseUnit = () => setUnits(units + 1);

  const decreaseUnit = () => {
    if (units === 1) setUnits(1);
    else setUnits(units - 1);
  };

  const listDisplay = itemList.map((item) => {
    return (
      <div className="card my-2" key={item.id}>
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <h4>
                <strong>{item.name}</strong>
              </h4>
              <p>NGN {item.price}.00</p>
            </div>
            <div className="col-3">
              <Button variant="dark" onClick={() => handleShow(item)} block>
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const config = {
    tx_ref: Date.now(),
    amount: units * selectedItem.price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "upbaseng@gmail.com",
      phonenumber: userMobile,
      name: userName,
    },
    customizations: {
      title: " For Ose and Tola",
      description: "Gifts for Ose and Tola wedding",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <>
      <div className="col-12">
        <div className="row">
          {/* top banner */}
          <div className="col-12 py-4">
            <div class="jumbotron">
              <div className="container">
                <h1>Bootstrap Tutorial</h1>
                <p>
                  Bootstrap is the most popular HTML, CSS, and JS framework for
                  developing responsive, mobile-first projects on the web.
                </p>
              </div>
            </div>
          </div>
          {/* body */}
          <div className="col-12 py-5">
            <div className="container">{listDisplay}</div>
          </div>

          {/* modal */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Form className="px-5 py-5">
                <Form.Group>
                  <h3>
                    <strong>{selectedItem.name}</strong>
                  </h3>
                  <p>
                    NGN {Number(selectedItem.price).toLocaleString()} - unit
                    price
                  </p>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Col sm={3}>
                    <Button variant="dark" block onClick={decreaseUnit}>
                      -
                    </Button>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="text"
                      readOnly
                      value={units}
                      onChange={handleUnitChange}
                    />
                  </Col>
                  <Col sm={3}>
                    <Button variant="dark" block onClick={increaseUnit}>
                      +
                    </Button>
                  </Col>
                </Form.Group>
                <Form.Group>
                  <p className="text-right">
                    <strong>
                      NGN {Number(selectedItem.price * units).toLocaleString()}{" "}
                    </strong>
                  </p>
                </Form.Group>
                <Form.Group className="pt-5">
                  <p>
                    We really appreciate your support, let's get to know you
                  </p>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={6}>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      onChange={handleChangeUsername}
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      onChange={handleChangeUserMobile}
                    />
                  </Col>
                </Form.Group>

                <Button
                  variant="dark"
                  onClick={() => {
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal(); // this will close the modal programmatically
                      },
                      onClose: () => {},
                    });
                  }}
                  block
                >
                  Pay with Flutter
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Landing;
