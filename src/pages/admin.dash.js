import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import { Doughnut } from "react-chartjs-2";

import TopNav from "../components/navBar";

const products = [
  {
    id: 1,
    name: "John Doe ",
    price: 100,
  },
  {
    id: 2,
    name: "Jane Doe 2",
    price: 200,
  },
  {
    id: 3,
    name: "Juan Doe 3",
    price: 300,
  },
];

const chartData = [
  {
    id: 1,
    user: 12,
  },
  {
    id: 2,
    user: 11,
  },
];

function priceFormatter(cell, row) {
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

export default function AdminDash() {
  return (
    <>
      <TopNav />
      <Container className="h-100 mt-1 mb-5">
        <Row className="pt-3" xs={3} md={3} lg={3}>
          <Col>
            <Card>
              <Card.Body>
                <p> Chart Data</p>
                <Doughnut
                  data={chartData}
                  width="300"
                  height="150"
                  type="doughnut"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <p>This is a admin dashboard sample...</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <p>This is a admin dashboard sample...</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={1} lg={1}>
          <Col>
            <BootstrapTable data={products} striped={true} hover={true}>
              <TableHeaderColumn
                dataField="id"
                isKey={true}
                dataAlign="center"
                dataSort={true}
              >
                Client ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField="name" dataSort={true}>
                Client Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>
                Client Balance
              </TableHeaderColumn>
            </BootstrapTable>
          </Col>
        </Row>
      </Container>
    </>
  );
}
