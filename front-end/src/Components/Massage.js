import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import './massage.css';

export default class Massage extends Component {
  state = {};

  // onFormSubmit = (evt) = {

  //     evt.preventDefault();
  // };

  render() {
    return (
      <Container className="form-padding">
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" />
          </FormGroup>
          <FormGroup>
            <Label for="time">Time</Label>
            <Input type="time" name="time" id="time" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Name</Label>
            <Input type="email" name="text" id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Mobile</Label>
            <Input type="email" name="text" id="mobile" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">Medical QA</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Comment</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}
