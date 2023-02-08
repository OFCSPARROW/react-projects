import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';

export default class project8 extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col lg={12} className="p-2 bg-primary">
              <Row>
                <Col lg={1} className="bg-info p-4"></Col>
                <Col lg={1} className="bg-danger p-4"><p>Flipkart</p><span>Explore</span><span>Plus</span></Col>
                <Col lg={4} className="bg-success p-4"><input type="text" placeholder="Search products and More..." /></Col>
                <Col lg={1} className="bg-warning p-4"></Col>
                <Col lg={2} className="bg-secondary p-4"></Col>
                <Col lg={1} className="bg-dark p-4"></Col>
                <Col lg={1} className="bg-danger p-4"></Col>
                <Col lg={1} className="bg-warning p-4"></Col>
              </Row>
            </Col>
          </Row>
          {/* NAV */}
          {/* 1 SECTION */}
          <Row>
            <Col lg={12} className="bg-danger p-5">
              <Row>
                <Col lg={2} className="bg-primary p-5"></Col>
                <Col lg={1} className="bg-info p-5"></Col>
                <Col lg={1} className="bg-success p-5"></Col>
                <Col lg={1} className="bg-warning p-5"></Col>
                <Col lg={1} className="bg-secondary p-5"></Col>
                <Col lg={1} className="bg-dark p-5"></Col>
                <Col lg={1} className="bg-primary p-5"></Col>
                <Col lg={1} className="bg-info p-5"></Col>
                <Col lg={1} className="bg-success p-5"></Col>
                <Col lg={2} className="bg-warning p-5"></Col>
              </Row>
            </Col>
          </Row>
          {/* 1 SECTION */}
          {/* 2 SEcTION */}
          <Row>
            <Col lg={12} className="p-5">
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
            </div>
            </Col>
          </Row>
          {/* 2 SECTION */}
          {/* 3 SECTION */}
          <Row>
            <Col lg={12} className="bg-warning p-5">
              <Row>
                <Col lg={2} className="bg-danger p-5"></Col>
                <Col lg={2} className="bg-success p-5"></Col>
                <Col lg={2} className="bg-danger p-5"></Col>
                <Col lg={2} className="bg-success p-5"></Col>
                <Col lg={2} className="bg-danger p-5"></Col>
                <Col lg={2} className="bg-success p-5"></Col>
              </Row>
            </Col>
          </Row>
          {/* 3 SECTION */}
          {/* 4 SECTION */}
          <Row>
            <Col lg={12} className="bg-primary p-5">
              <Row>
                <Col lg={2} className="bg-danger p-5"></Col>
                <Col lg={2} className="bg-success p-5"></Col>
                <Col lg={2} className="bg-danger p-5"></Col>
                <Col lg={2} className="bg-success p-5"></Col>
                <Col lg={2} className="bg-danger p-5"></Col>
                <Col lg={2} className="bg-success p-5"></Col>
              </Row>
            </Col>
          </Row>
          {/* 4 SECTION */}
          {/* FOOTER */}
          <Row>
            <Col lg={12} className="bg-dark p-5"></Col>
            <Col lg={12} className="bg-secondary p-5"></Col>
          </Row>
        </Container>
      </div>
    )
  }
}
