import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function EmpLis() {
    const [Users, empdatachange] = useState(null);
    useEffect(() => {
        fetch("http://localhost:4000/employee")
        .then((res) => {
            console.log(res);
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
 
  return (
      <div className="container">
     <h3>React Js CRUD Operations</h3>
 
    <div className="card">
        <div className="card-title">
            <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
            <div className="divbtn">
                <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
            </div>
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Designation</td>
                        <td>Team</td>
                        <td>Manager</td>
                        <td>Short</td>
                    </tr>
                </thead>
                <tbody>
                {Users &&
                                Users.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.team}</td>
                                        <td>{item.manager}</td>
                                        <td>{item.short}</td>
                                    </tr>
                                ))
                            }


                </tbody>

            </table>
        </div>
    </div>
</div>
  )
}

export default EmpLis