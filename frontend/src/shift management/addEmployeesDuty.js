import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Header from'./NavBar'


export default class addDutyShift extends Component {


  constructor(props){
    super(props);

    this.onChangeSID = this.onChangeSID.bind(this);
    this.onChangeDateAndTimeFrom = this.onChangeDateAndTimeFrom.bind(this);
    this.onChangeDateAndTimeTo = this.onChangeDateAndTimeTo.bind(this);
    this.onChangeEmployee = this.onChangeEmployee.bind(this);
    this.onChangeMonthlySchedule = this.onChangeMonthlySchedule.bind(this);
   

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      sID: "",
      dateTimeFrom: "",
      dateTimeTo: "",
      employee: "",
      monthlySchedule: "",
      
    }

  }

  onChangeSID(e){
    this.setState({
      sid: e.target.value,
    })
  }

  onChangeDateAndTimeFrom(e){
    this.setState({
      dateandtimefrom: e.target.value,
    })
  }


  onChangeDateAndTimeTo(e){
    this.setState({
      dateandtimeto: e.target.value,
    })
  }

  onChangeEmployee(e){
    this.setState({
      employee: e.target.value,
    })
  }

  onChangeMonthlySchedule(e){
    this.setState({
      monthlySchedule: e.target.value,
    })
  }

  
  



  onSubmit(e){

    e.preventDefault();

    const empDuty = {
      sID: this.state.sid,
      dateTimeFrom: this.state.dateandtimefrom,
      dateTimeTo: this.state.dateandtimeto,
      employee: this.state.employee,
      monthlySchedule: this.state.monthlySchedule,
    }

    alert("sucessfully added");

    axios.post('http://localhost:5000/api/individualSchedule/add',empDuty)
    .then(res => {console.log(res.data)});

    this.setState ( {
      sid: "",
      dateandtimefrom: "",
      dateandtimeto: "",
      employee: "",
      monthlySchedule: "",
      
    })

  }



    render() {
        return (
            <div>
            <Header/>
            <div style={{justifyContent:'center', display:'flex'}} className="back">
            <div class="row justify-container-center">
            <div class="col-md-5">
            <Card style={{ width: '40rem'  }} className="addheight">
            
            
            <Card.Body >
              <Card.Title style={{justifyContent:'center', display:'flex'}}>ADD Employee's Shift Details</Card.Title>
                <br/>
              
              <Form onSubmit ={this.onSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>SID</Form.Label>
    <Form.Control type="name" onChange={this.onChangeSID} value={this.state.sid} placeholder="Enter SID here" />
    
  </Form.Group>
  <br/>
  

  <br/> 

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Date&time from</Form.Label>
    <Form.Control type="date and time"  onChange={this.onChangeDateAndTimeFrom} value={this.state.dateandtimefrom} placeholder="Enter date and time from  here" />
  </Form.Group>
  <br/> 
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Date&time to</Form.Label>
    <Form.Control type="Date and time"  onChange={this.onChangeDateAndTimeTo} value={this.state.dateandtimeto} placeholder="Enter date and time to here" />
  </Form.Group>

            

  <br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>employee</Form.Label>
    <Form.Control type="employee" onChange={this.onChangeEmployee} value={this.state.employee} placeholder="Enter employee id here" />
  </Form.Group>
  <br/>
  <br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Monthly Schedule</Form.Label>
    <Form.Control type="monthly schedule" onChange={this.onChangeMonthlySchedule} value={this.state.monthlySchedule} placeholder="Enter monthlt schedule id  here" />
  </Form.Group>
  <br/>
 
  <Button className="searchBtn"  variant="success" type="submit" >
    ADD
  </Button>
</Form>


             
        
            </Card.Body>
          </Card>
          </div>
          </div>
          </div>
          <div>
      <footer
        style={{
          height: "50px",
        }}
      >
        <div style={{ textAlign: "center", paddingBottom: "5px",backgroundColor:"#128b27" }}>
          <hr />
          &copy; 2020 copyright: SABH-PK.com
        </div>
      </footer>
    </div>
    
            </div>
        )
    }
}
