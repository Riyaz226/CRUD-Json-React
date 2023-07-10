import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

function EmpCreate() {

const [id]=useState("");
const [name,namechange]=useState("");
const [designation,designationchange]=useState("");
const [team,teamchange]=useState("");
const [manager,managerchange]=useState("");
const [short,shortchange]=useState("");
const [active,activechange]=useState("true");
const[validation,valchange]=useState(false);


const navigate= useNavigate();

const handlesubmit=(e)=>{
  e.preventDefault();
  const employee={id,name,designation,team,manager,short};

  fetch("http://localhost:4000/employee",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(employee)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })
}
    return (
    <>
  <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Employee Create</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                            {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Designation</label>
                                            <input value={designation} onChange={e=>designationchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Team</label>
                                            <input value={team} onChange={e=>teamchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Manager</label>
                                            <input value={manager} onChange={e=>managerchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Short</label>
                                            <input value={short} onChange={e=>shortchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                        <input checked={active} onChange={e=>activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                            <label  className="form-check-label">Is Active</label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
    </> 
  )
}

export default EmpCreate