import React from "react";
import "./jobs.css";

const Jobs = props =>  {
        return (

          <div className="cards">
            <div className="job-titles">{props.title}</div>
            <hr/>
            <h3 className="job-role"><b>Role</b><br/>{props.role}</h3>
            <h3 className="job-salary"><b>Salary</b><br/>{props.salary}</h3>
            <h3 className="job-company"><b>Companies</b><br/>{props.company}</h3>
          </div>
          
        );
      }
    
    
export default Jobs;