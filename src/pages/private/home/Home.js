import React, { Component }from "react";
import {
  Container, Section, Row, Col
} from '../../../ui/swUI';
import './Home.css';

class Home extends Component {
  render() {
    // const { fullData } = this.props;
    return (
      <Container>
        <Section>
          <Row>
            <Col>
              Welcome
            </Col>
          </Row>
        </Section>
      </Container>
    );
  }
};

export default Home;