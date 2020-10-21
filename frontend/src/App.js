import React, { useState, useEffect } from "react";
import Axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redirect, Switch,

import Login from "./account management/pages/Login";

import UserContext from "./context/UserContext";
import AddEmp from "./shift management/addEmployee";
import AddEmpDuty from "./shift management/addEmployeesDuty";
import AddMonSche from "./shift management/addMonthlySchedule";
import ManageAssLand from "./shift management/managementAssLanding";
import searchDuty from "./shift management/searchDuty";
import searchEmp from "./shift management/searchEmployee";
import ViewEmp from "./shift management/viewEmployee";
import ViewEmpDuty from "./shift management/viewEmployeeDuty";
import ViewMonSche from "./shift management/viewMonthlySchedule";

import UpdateMonthly from "./shift management/updateMonthlySchedule"
import UpdateEmployee from "./shift management/updateEmployee"
import UpdateEmployeeDuty from "./shift management/updateEmployeeDuty"
import Header from'./shift management/NavBar'

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/api/users/tokenIsValid",
        {},
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
import ViewMonSche from "./shift management/viewMonthlySchedule";
import ViewEmp from "./shift management/viewEmployee";
          <Route path="/" exact component={ManageAssLand} />

          <Route path="/viewmonthlyschedule" exact component={ViewMonSche} />

          <Route path="/update/:id" exact component={UpdateMonthly} />

          <Route path="/viewemployee" exact component={ViewEmp} />
          <Route path="/addemployee" exact component={AddEmp} />
          <Route path="/searchemployee" exact component={searchEmp} />
          <Route path="/addempdutyschedule" exact component={AddEmpDuty} />
          <Route path="/addmonschedule" exact component={AddMonSche} />
          <Route path="/addmonschedule" exact component={AddMonSche} />
          <Route path="/viewempduty" exact component={ViewEmpDuty} />
          <Route path="/searchempduty" exact component={searchDuty} />

          <Route path="/updateEmployee/:id" exact component={UpdateEmployee} />
          <Route path="/updateemployeeduty/:id" exact component={UpdateEmployeeDuty} />

         
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
