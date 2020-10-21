import React, { Component } from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table' 
import {Link} from 'react-router-dom'
import axios from 'axios'
import Header from'./NavBar'

const EmpDetails = props => (
  <tr>
    <td>{props.empDetails.Empid}</td>
    <td>{props.empDetails.Name}</td>
    <td>{props.empDetails.Nic}</td>
    <td>{props.empDetails.Post}</td>
    <td>{props.empDetails.Units}</td>
    <td>{props.empDetails.Phone}</td>
    <td>{props.empDetails.Grade}</td>
   
    <td >
      <Link to={"/updateEmployee/"+props.empDetails._id}>update</Link> | <a href="#" onClick={() => { props.deleteempDetails(props.empDetails._id) }}>delete</a>
    </td>
  </tr>
)


export default class viewEmployee extends Component {

  constructor(props) {
    super(props);

    this.deleteempDetails = this.deleteempDetails.bind(this)

    this.state = {empDetails1: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/employee/')
      .then(response => {
        this.setState({ empDetails1: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteempDetails(id) {
    axios.delete('http://localhost:5000/api/employee/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      empDetails1: this.state.empDetails1.filter(el => el._id !== id)
    })
  }

  empDetailsList() {
    return this.state.empDetails1.map(currentempDetails => {
      return <EmpDetails empDetails={currentempDetails} deleteempDetails={this.deleteempDetails} key={currentempDetails._id}/>;
    })
  }



    render() {
        return (
            <div >
            <Header/>
           <h1 style={{justifyContent:'center', display:'flex'}}>Employee Details</h1>
           <br/>
            <Table striped bordered hover style={{backgroundColor:"#A4D8A4"}}>
            <thead>
              <tr>
                <th>Emp_ID</th>
                <th>Name</th>
                <th>NIC</th>
                <th>post</th>
                <th>Units</th>
                <th>phone</th>
                <th>Grade</th>
                <th>operations</th>

              </tr>
            </thead>
            <tbody>
              
            {this.empDetailsList()}  
            </tbody>
          </Table>
          
          <div>
          <footer
            style={{
              height: "50px",
              marginTop:"400px"
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
