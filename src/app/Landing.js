import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Landing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div className="container">
              <div className="card my-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <h4>
                        <strong>Cash Gift</strong>
                      </h4>
                      <p>NGN 5,000.00</p>
                    </div>
                    <div className="col-3">
                      <button
                        type="button"
                        className="btn btn-dark btn-lg btn-block"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card my-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-9">
                      <h4>
                        <strong>Sandwich Maker</strong>
                      </h4>
                      <p>NGN 15,000.00</p>
                    </div>
                    <div className="col-3">
                      <Button variant="dark" onClick={handleShow} block>
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* modal */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Form className="px-5 py-5">
                <Form.Group>
                  <h3>
                    <strong>Sandwich Maker</strong>
                  </h3>
                  <p>NGN 5,000.00 - unit price</p>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                  <Col sm={3}>
                    <Button variant="dark" block>
                      -
                    </Button>
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      readOnly
                      value="1"
                    />
                  </Col>
                  <Col sm={3}>
                    <Button variant="dark" block>
                      +
                    </Button>
                  </Col>
                </Form.Group>
                <Form.Group>
                  <p className="text-right">
                    <strong>NGN 5,000.00</strong>
                  </p>
                </Form.Group>
                <Form.Group className="pt-5">
                  <p>
                    We really appreciate your support, let's get to know you
                  </p>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col sm={6}>
                    <Form.Control type="text" placeholder="Name" />
                  </Col>
                  <Col sm={6}>
                    <Form.Control type="text" placeholder="Mobile Number" />
                  </Col>
                </Form.Group>
                <Button variant="dark" block className="mt-4">
                  Pay Now
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
