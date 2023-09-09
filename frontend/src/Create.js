import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../src/images/create_pen.jpg';

function Create() {
    const [values, setValues] = useState({
        name: "",
        email: ""
    })
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8081/student", values)
        .then(res => {
            console.log(res);
            navigate("/")
        })
        .catch(err => console.log(err))
    }
  return (
    <div 
        className='d-flex vh-100 justify-content-center align-items-center'
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control' 
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' 
                    onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <Link to='/' className='btn btn-primary me-2'>Back</Link>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create
