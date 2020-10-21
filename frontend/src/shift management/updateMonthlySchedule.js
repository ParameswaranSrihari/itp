import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import axios from 'axios';



export default class addMonthlySchedule extends Component {

  constructor(props){
    super(props);

    this.onChangeMID = this.onChangeMID.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
  
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      MID: "",
      month: "",
      year: "",
    }
  }

  componentDidMount() {

    axios.get('http://localhost:5000/api/monthlySchedule/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            MID: response.data.MID,
            month: new Date(response.data.month),
            year: response.data.year,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeMID(e){
    this.setState({
      MID: e.target.value,
    })
  }

  onChangeMonth(e){
    this.setState({
      month: e.target.value,
    })
  }


  onChangeYear(e){
    this.setState({
      year: e.target.value,
    })
  }

  onSubmit(e){

    e.preventDefault();

    const MonthlySche = {
      MID: this.state.MID,
      month: this.state.month,
      year: this.state.year,
    };

    axios.post('http://localhost:5000/api/monthlySchedule/update/' + this.props.match.params.id, MonthlySche)
    .then(res => console.log(res.data));

    window.location = '/';

  }

    render() {
        return (
            <div>
            <div style={{justifyContent:'center', display:'flex'}} className="back">
            <div class="row justify-container-center">
            <div class="col-md-5">
            <Card style={{ width: '40rem'  }} className="addMonthheight">
            
            
            <Card.Body >
              <Card.Title style={{justifyContent:'center', display:'flex'}}>Edit Monthly Schedule</Card.Title>
                <br/>

                <Form onSubmit ={this.onSubmit}> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>MID</Form.Label>
    <Form.Control type="mid" onChange={this.onChangeMID} value={this.state.MID} placeholder="Enter month ID here" />
    
  </Form.Group>
  <br/>
              
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Month</Form.Label>
    <Form.Control type="Month" onChange={this.onChangeMonth} value={this.state.month} placeholder="Enter month here" />
    
  </Form.Group>
  <br/>
  
  <Form.Group controlId="formBasicPassword">
    <Form.Label>year</Form.Label>
    <Form.Control type="Year" onChange={this.onChangeYear} value={this.state.year} placeholder="Enter year here" />
  </Form.Group>
  <br/>
  
  <br/>
  
 
  <Button className="searchBtn" onSubmit={this.onSubmit} variant="primary" type="submit" >
    ADD
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
