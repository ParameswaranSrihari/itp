import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Header from'./NavBar'


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
    alert("sucessfully added");

    
    axios.post('http://localhost:5000/api/monthlySchedule/add',MonthlySche)
    .then(res => {console.log(res.data)});

    this.setState ( {
      MID: "",
      month: "",
      year: "",
     
      
    })
    



  }



    render() {
        return (
            <div>
            <Header/>
            <div style={{justifyContent:'center', display:'flex'}} className="back">
            <div class="row justify-container-center">
            <div class="col-md-5">
            <Card style={{ width: '40rem'  }} className="addMonthheight">
            
            
            <Card.Body >
              <Card.Title style={{justifyContent:'center', display:'flex'}}>ADD Monthly Schedule</Card.Title>
                <br/>

                <Form onSubmit ={this.onSubmit}> 
  <Form.Group >
    <Form.Label>MID</Form.Label>
    <Form.Control type="mid" required onChange={this.onChangeMID} value={this.state.mid} placeholder="Enter month ID here" />
    
  </Form.Group>
  <br/>
              
 
  <Form.Group >
    <Form.Label>Month</Form.Label>
    <Form.Control type="Month" required onChange={this.onChangeMonth} value={this.state.month} placeholder="Enter month here" />
    
  </Form.Group>
  <br/>
  

  <Form.Group >
    <Form.Label>year</Form.Label>
    <Form.Control type="Year" required onChange={this.onChangeYear} value={this.state.year} placeholder="Enter year here" />
  </Form.Group>
  <br/>
  

  <br/>
  
 
  <Button className="searchBtn" onSubmit={this.onSubmit} variant="success" type="submit" >
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
              marginTop:"200px"
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
