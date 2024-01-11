import React from 'react';


 interface EmployeeProps {
    firstName:string,
    lastName:string,
    jobTitle:string,
    avatar:string,
     onClick:()=>{}
 }
const Employee = (employee:EmployeeProps) => {

    const  {firstName,lastName,jobTitle,avatar,onClick} = employee;
    return (
        <div className="employee" onClick={onClick}>
      <img src={avatar} alt={`${firstName} ${lastName}'s avatar`} />
      <div>
        <h3>{firstName} {lastName}</h3>
        <p>{jobTitle}</p>
      </div>
    </div>
    )
}
 


class MyOrgPage extends React.Component {

    
  state = {
    employees: [
      { id: 1, firstName: 'John', lastName: 'Doe', jobTitle: 'Software Engineer', avatar: 'john.jpg' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', jobTitle: 'Product Manager', avatar: 'jane.jpg' },
      // Additional employee data
    ]
  };

  viewEmployeeProfile = (employeeId:string) => {
    // Logic to redirect to employee's detailed profile page
    // For example: history.push(`/employee/${employeeId}`);
  }

  render() {
    const { employees } = this.state;

    return (
      <div>
        <h2>My Org Page</h2>
        <div className="employee-list">
          {employees.map(employee => (
            <Employee
              key={employee.id}
              firstName={employee.firstName}
              lastName={employee.lastName}
              jobTitle={employee.jobTitle}
              avatar={employee.avatar}
              onClick={() => this.viewEmployeeProfile(employee.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}