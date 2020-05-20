import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

import Panel from '../panel/Panel';
import FeedDisplay from '../feed-display/FeedDisplayContainer';
import MoneyChart from '../money-chart/MoneyChartContainer';
import MoneyControl from '../money-control/MoneyControlContainer';

function App() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>
          <FormattedMessage id="topbar.title" />
        </Navbar.Brand>
      </Navbar>
      <Container
        fluid
        className="p-3"
      >
        <Row className="mb-3">
          <Col xs={12}>
            <MoneyControl className="mr-auto ml-auto" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={12}>
            <Panel>
              <MoneyChart />
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <FeedDisplay />
          </Col>
          <Col xs={12} md={6}>
            <h3>Hello</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
