import React, { Component } from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form'
import axios from 'axios';
import Header from'./NavBar'



export default class addEmployee extends Component {

    constructor(props){
      super(props);

      this.onChangeEmpId = this.onChangeEmpId.bind(this);
      this.onChangeEmpName = this.onChangeEmpName.bind(this);
      this.onChangeNIC = this.onChangeNIC.bind(this);
      this.onChangePost = this.onChangePost.bind(this);
      this.onChangeUnit = this.onChangeUnit.bind(this);
      this.onChangeMNumber = this.onChangeMNumber.bind(this);
      this.onChangeGrade = this.onChangeGrade.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        empid: "",
        name: "",
        nic: "",
        post: "",
        units: "",
        phone: "",
        grade: "",
        
      }

    }

    onChangeEmpId(e){
      this.setState({
        empid: e.target.value,
      })
    }

    onChangeEmpName(e){
      this.setState({ 
        name: e.target.value,
      })
    }


    onChangeNIC(e){
      this.setState({
        nic: e.target.value,
      })
    }

    onChangePost(e){
      this.setState({
        post: e.target.value,
      })
    }

    onChangeUnit(e){
      this.setState({
        units: e.target.value,
      })
    }

    onChangeMNumber(e){
      this.setState({
        phone: e.target.value,
      })
    }

    onChangeGrade(e){
      this.setState({
        grade: e.target.value,
      })
    }

    onSubmit(e){

      e.preventDefault();

      const empDetails = {
        empid: this.state.empid,
        name: this.state.name,
        nic: this.state.nic,
        post: this.state.post,
        units: this.state.units,
        phone: this.state.phone,
        grade: this.state.grade,

      }

      console.log(empDetails)

      axios.post('http://localhost:5000/api/employee/add',empDetails)
    .then(res => {console.log(res.data)});

    this.setState ( {
      empid: "",
      name: "",
      nic: "",
      post: "",
      units: "",
      phone: "",
      grade: ""
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
              <Card.Title style={{justifyContent:'center', display:'flex'}}>ADD Employee</Card.Title>
                <br/>

                <Form onSubmit={this.onSubmit}>
                
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Emp_ID</Form.Label>
    <Form.Control type="name" onChange={this.onChangeEmpId} value={this.state.empid} placeholder="Enter employee ID here" />
    
  </Form.Group>
  <br/>
              
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Employee Name</Form.Label>
    <Form.Control type="name" onChange={this.onChangeEmpName} value={this.state.name} placeholder="Enter name here" />
    
  </Form.Group>
  <br/>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>NIC_No</Form.Label>
    <Form.Control type="NIC" onChange={this.onChangeNIC} value={this.state.nic} placeholder="Enter NIC number here" />
  </Form.Group>
  <br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>post</Form.Label>
    <Form.Control type="post" onChange={this.onChangePost} value={this.state.post}  placeholder="Enter the post here" />
  </Form.Group>
  <br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Unit</Form.Label>
    <Form.Control type="unit" onChange={this.onChangeUnit} value={this.state.units} placeholder="Enter the unit here" />
  </Form.Group>
  <br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Mobile_No</Form.Label>
    <Form.Control type="MNum" onChange={this.onChangeMNumber} value={this.state.phone}  placeholder="Enter mobile number here" />
  </Form.Group> 

  
  <Form.Group controlId="formBasicEmail">
    <Form.Label>grade</Form.Label>
    <Form.Control type="grade" onChange={this.onChangeGrade} value={this.state.grade} placeholder="Enter grade here" />
    
  </Form.Group>
  <br/>

  <br/>
  
 
  <Button style={{justifyContent:'center', display:'flex'}}  variant="success" type="submit" >
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

