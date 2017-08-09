import React from 'react'
var Carousel = require('nuka-carousel');
import { Grid, Row, Col, Tabs, Tab } from 'react-bootstrap';
import running from "../assets/1.jpg"
import running1 from "../assets/2.jpg"
import running2 from "../assets/3.jpg"

export class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log('selected ', key);
    this.setState({key});
  }

  render() {

    return (
      <div>
        <Carousel>
          <img src={running} />
          <img src={running1} />
          <img src={running2} />
        </Carousel>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} xsOffset={3}>TLG-404</Col>
          </Row>
          <Row className="show-grid">
            <Col xs={6} md={4}>产品代号: df45451</Col>
            <Col xs={6} md={4}>品种:TOP-link</Col>
          </Row>
        </Grid>
        <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
          <Tab eventKey={1} title="基本信息">Tab 1 content</Tab>
          <Tab eventKey={2} title="详情">Tab 2 content</Tab>
          <Tab eventKey={3} title="讨论">Tab 3 content</Tab>
        </Tabs>
      </div>
    );
  }
}

export default HomeView
