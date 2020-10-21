import React, { Component } from 'react'
import '../App.css';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from'./NavBar'

const MonthlySche = props => (
  <tr>
    <td>{props.MonthlySche.MID}</td>
    <td>{props.MonthlySche.month}</td>
    <td>{props.MonthlySche.year}</td>
   
    <td>
      <Link to={"/update/"+props.MonthlySche._id}>update</Link> | <a href="#" onClick={() => { props.deleteMonthlySche(props.MonthlySche._id) }}>delete</a>
    </td>
  </tr>
)


export default class viewMonthlySchedule extends Component {

  constructor(props) {
    super(props);

    this.deleteMonthlySche = this.deleteMonthlySche.bind(this)

    this.state = {MonthlySched: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/monthlySchedule/')
      .then(response => {
        this.setState({ MonthlySched: response.data })
      })
      .catch((error) => { 
        console.log(error);
      })
  }

  deleteMonthlySche(id) {
    axios.delete('http://localhost:5000/api/monthlySchedule/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      MonthlySched: this.state.MonthlySched.filter(el => el._id !== id)
    })
  }

  MonthlyScheList() {
    return this.state.MonthlySched.map(currentMonthlySche => {
      return <MonthlySche MonthlySche={currentMonthlySche} deleteMonthlySche={this.deleteMonthlySche} key={currentMonthlySche._id}/>;
    })
  }


    render() {
        return (
            <div>
            <Header/>
            <h1 style={{justifyContent:'center', display:'flex'}}>Monthly Schedule</h1>
            <Table striped bordered hover style={{backgroundColor:"#A4D8A4"}}>
            <thead>
              <tr>
                <th>MID</th>
                <th>Month</th>
                <th>year</th>
                <th>operations</th>
               
               
              </tr>
            </thead>
            <tbody>
            {this.MonthlyScheList()}            
            </tbody>
          </Table>
          <div>
          <footer
            style={{
              height: "50px",
              marginTop:"300px"
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
