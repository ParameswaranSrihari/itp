import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import axios from 'axios';



export default class updateIndividualSchedule extends Component {

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
        employee:"",
        monthlySchedule:"",
    }
  }

  componentDidMount() {

    axios.get('http://localhost:5000/api/individualSchedule/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            sID: response.data.sID,
            dateTimeFrom:  response.data.dateTimeFrom,
            dateTimeTo: response.data.dateTimeTo,
            employee: response.data.employee,
            monthlySchedule: response.data.monthlySchedule,
           
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeSID(e){
    this.setState({
        sID: e.target.value,
    })
  }

  onChangeDateAndTimeFrom(e){
    this.setState({
        dateTimeFrom: e.target.value,
    })
  }


  onChangeDateAndTimeTo(e){
    this.setState({
        dateTimeTo: e.target.value,
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
        sID: this.state.sID,
        dateTimeFrom: this.state.dateTimeFrom,
        dateTimeTo: this.state.dateTimeTo,
        employee: this.state.employee,
        monthlySchedule: this.state.monthlySchedule,
    };

    alert("updated sucessfully ");

    axios.post('http://localhost:5000/api/individualSchedule/update/' + this.props.match.params.id, empDuty)
    .then(res => console.log(res.data));

    window.location = '/viewempduty';

  }

    render() {
        return (
            <div>
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
    <Form.Control type="name" onChange={this.onChangeSID} value={this.state.sID} placeholder="Enter SID here" />
    
  </Form.Group>
  <br/>
  

  <br/> 

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Date&time from</Form.Label>
    <Form.Control type="date and time"  onChange={this.onChangeDateAndTimeFrom} value={this.state.dateTimeFrom} placeholder="Enter date and time from  here" />
  </Form.Group>
  <br/> 
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Date&time to</Form.Label>
    <Form.Control type="Date and time"  onChange={this.onChangeDateAndTimeTo} value={this.state.dateTimeTo} placeholder="Enter date and time to here" />
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
 
  <Button className="searchBtn"  variant="primary" type="submit" >
    EDIT
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
