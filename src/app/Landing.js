import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Landing extends Component {
  state = {
    users: [],
  };

  render() {
    return (
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
                      <button
                        type="button"
                        className="btn btn-dark btn-lg btn-block"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
