import React from 'react';
import { Navbar, Page, BlockTitle, Block, List, Row, Col, ListButton, Button, Segmented } from 'framework7-react';

export default () => (
  <Page>
    <Navbar title="Buttons" backLink="Back" />

    <BlockTitle>Usual Buttons</BlockTitle>
    <Block>
      <Row>
        <Col>
          <Button>Button</Button>
        </Col>
        <Col>
          <Button>Button</Button>
        </Col>
        <Col>
          <Button round>Round</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Fill Buttons</BlockTitle>
    <Block>
      <Row>
        <Col>
          <Button fill>Button</Button>
        </Col>
        <Col>
          <Button fill>Button</Button>
        </Col>
        <Col>
          <Button fill round>Round</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Outline Buttons (MD-theme only)</BlockTitle>
    <Block>
      <Row>
        <Col>
          <Button outline>Button</Button>
        </Col>
        <Col>
          <Button outline>Button</Button>
        </Col>
        <Col>
          <Button outline round>Round</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Raised Buttons (MD-theme only)</BlockTitle>
    <Block>
      <Row tag="p">
        <Col>
          <Button raised>Button</Button>
        </Col>
        <Col>
          <Button raised fill>Fill</Button>
        </Col>
        <Col>
          <Button raised outline>Outline</Button>
        </Col>
      </Row>
      <Row tag="p">
        <Col>
          <Button raised round>Round</Button>
        </Col>
        <Col>
          <Button raised fill round>Fill</Button>
        </Col>
        <Col>
          <Button raised outline round>Outline</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Segmented</BlockTitle>
    <Block>
      <Segmented raised tag="p">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button active>Active</Button>
      </Segmented>
      <Segmented raised tag="p">
        <Button outline>Outline</Button>
        <Button outline>Outline</Button>
        <Button outline active>Active</Button>
      </Segmented>
      <Segmented raised round tag="p">
        <Button round>Button</Button>
        <Button round>Button</Button>
        <Button round active>Active</Button>
      </Segmented>
      <Segmented round round tag="p">
        <Button round outline>Outline</Button>
        <Button round outline>Outline</Button>
        <Button round outline active>Active</Button>
      </Segmented>
    </Block>

    <BlockTitle>Big Buttons</BlockTitle>
    <Block>
      <Row tag="p">
        <Col>
          <Button big>Button</Button>
        </Col>
        <Col>
          <Button big fill>Fill</Button>
        </Col>
      </Row>
      <Row tag="p">
        <Col>
          <Button big raised>Raised</Button>
        </Col>
        <Col>
          <Button big raised fill>Raised Fill</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Small Buttons</BlockTitle>
    <Block>
      <Row tag="p">
        <Col>
          <Button big small>Button</Button>
        </Col>
        <Col>
          <Button big small outline>Outline</Button>
        </Col>
        <Col>
          <Button big small fill>Fill</Button>
        </Col>
      </Row>
      <Row tag="p">
        <Col>
          <Button big small round>Button</Button>
        </Col>
        <Col>
          <Button big small outline round>Outline</Button>
        </Col>
        <Col>
          <Button big small fill round>Fill</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Color Buttons</BlockTitle>
    <Block>
      <Row>
        <Col>
          <Button color="red">Red</Button>
        </Col>
        <Col>
          <Button color="green">Green</Button>
        </Col>
        <Col>
          <Button color="blue">Blue</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Color Fill Buttons</BlockTitle>
    <Block>
      <Row>
        <Col>
          <Button fill color="red">Red</Button>
        </Col>
        <Col>
          <Button fill color="green">Green</Button>
        </Col>
        <Col>
          <Button fill color="blue">Blue</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>List-Block Buttons</BlockTitle>
    <List inset>
      <ListButton title="List Button 1"></ListButton>
      <ListButton title="List Button 2"></ListButton>
      <ListButton title="List Button 3"></ListButton>
    </List>
    <List inset>
      <ListButton title="Big Red Button" color="red"></ListButton>
    </List>
  </Page>
);
