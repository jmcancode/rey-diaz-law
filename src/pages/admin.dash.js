import React from "react";

import { Container, Row, Col, Card } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import cellEditFactory from "react-bootstrap-table2-editor";

import TopNav from "../components/navBar";

const clients = [
  {
    id: 1,
    name: "John Doe ",
    price: 100,
    progress: "100%",
  },
  {
    id: 2,
    name: "Jane Doe 2",
    price: 200,
    progress: "100%",
  },
  {
    id: 3,
    name: "Juan Doe 3",
    price: 300,
    progress: "25%",
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
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
              <Card.Body className="text-center">
                <p>Some Component</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="text-center">
                <p>Some Component</p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body className="text-center">
                <p>Some Component</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="pt-3" xs={1} md={1} lg={1}>
          <Col>
            <BootstrapTable
              cellEdit={cellEditFactory({ mode: "click" })}
              data={clients}
              striped={true}
              hover={true}
              columns={columns}
            >
              <TableHeaderColumn
                dataField="id"
                isKey={true}
                dataAlign="left"
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
              <TableHeaderColumn
                dataField="progress"
                dataFormat={priceFormatter}
              >
                On-boarding
              </TableHeaderColumn>
            </BootstrapTable>
          </Col>
        </Row>
      </Container>
    </>
  );
}
