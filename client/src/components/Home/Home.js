import React, {useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";

export function IndexPage(){

    const [details, setDetails] = useState([]);

    var dataString = new FormData();
    var config = {headers : {"enctype" : "multipart/form-data"}};

    useEffect(()=>{
        fetch("http://localhost:3001/details", dataString, config)
        .then((response)=>response.json())
        .then((data)=>{
            setDetails(data);
        })
        
    })
    
    return(
        <>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-6">
                    <h4>Student new Registration</h4>
                    <form>
                        <div className="form-group">
                            <label>Student Name</label>
                            <input type="text" id="name" name="name" className="form-control" placeholder="Name" />
                            <label>Roll No</label>
                            <input type="text" id="roll" name="roll" className="form-control" placeholder="Roll No"/>
                            <label>Date of Birth</label>
                            <input type="date" id="date" name="date" className="form-control" />
                            <label>Address</label>
                            <input type="text" id="address" name="address" className="form-control" placeholder="Address" />
                            <label>Phone Number</label>
                            <input type="number" id="phone" name="phone" className="form-control" placeholder="Phone Number" />
                        </div>
                        <button type="submit" id="submit_btn" name="submit_btn" className="btn btn-block btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <div className="tabel-responsive">
                        <h4 className="text-center">Student Details</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Roll No</th>
                                    <th>Date of Birth</th>
                                    <th>Address</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {details.map((value, index) => (
                                    <tr key={index}>
                                        <td>{value.name}</td>
                                        <td>{value.rollno}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.address}</td>
                                        <td>{value.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>  

                </div>
            </div>
        </div>
        </>
    )
}