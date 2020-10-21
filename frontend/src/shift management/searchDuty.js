import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'


export default class searchDutyShift extends Component {
    render() {
        return (
            <div >
            <div style={{justifyContent:'center', display:'flex'}} className="back">
            <div class="row justify-container-center">
            <div class="col-md-5">
            <Card style={{ width: '40rem'  }} className="height">
            
            
            <Card.Body >
              <Card.Title style={{justifyContent:'center', display:'flex'}}>Search Duty Shift</Card.Title>
                <br/>
              
              <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="email" placeholder="Enter name here" />
    
  </Form.Group>
  <br/>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>NIC_No</Form.Label>
    <Form.Control type="NIC" placeholder="Enter NIC number here" />
  </Form.Group>
  <br/>
  <br/>
  <br/>
 
  <Button className="searchBtn" variant="primary" type="submit" >
    search
  </Button>
</Form>


             
        
            </Card.Body>
          </Card>
          </div>
          </div>
          </div>
            </div>
        )
    }
}