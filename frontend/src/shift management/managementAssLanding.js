import React from "react";
import '../App.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {Link} from "react-router-dom";
import Header from'./NavBar'

const managementAssLanding = () => {
  return (


    <div >
    <Header/>
    <div style={{justifyContent:'center', display:'flex' }} >

  
    <div class="col-md-5">
    <Card style={{ width: '40rem'  }} className="height">
    
    
    <Card.Body className="color" >
      <Card.Title>Employee Management</Card.Title>
      <Card.Text>
        This functions are based on employees.Here you can view employee details,add employees,search employee by giving the employee name and his NIC number.
      </Card.Text>
      <Link to="/viewemployee"><Button variant="success" size="lg" block>
     View Employees
    </Button></Link>
    <br/>
    
    <Link to="/addemployee"><Button variant="success" size="lg" block>
      Add employees
    </Button></Link>
    <br/>

   
  
     

    </Card.Body>
  </Card>
</div>
  <div class="col-md-5">
    <Card style={{ width: '40rem',marginright:100}} className="height">
    
    <Card.Body>
      <Card.Title>Shift Management</Card.Title>
      <Card.Text>
        This function is based on the shift management.here the you can add,view,search shift details.
      </Card.Text>
      <Link to="/viewempduty"><Button variant="success" size="lg" block>
      View employees duty schedule
    </Button></Link>
    <br/>
   
   

    <Link to="/viewmonthlyschedule"><Button variant="success" size="lg" block>
      View monthly Schedule
    </Button></Link>
    
    <br/>
    
    <Link to="/addempdutyschedule"><Button variant="success" size="lg" block>
      Add employees duty schedule
    </Button></Link>
    <br/>
    
    <Link to="/addmonschedule"><Button variant="success" size="lg" block>
      Add monthly schedule
    </Button></Link>
    <br/>

    
  
    </Card.Body>
  </Card>



 </div>
 </div>
 <br/><br/><br/><br/><br/><br/><br/><br/>
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
  );

};

export default managementAssLanding;