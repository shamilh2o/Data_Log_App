import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import backgroundImage from '../src/images/edit_pen.jpg';

function Edit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        if (id) {
          axios.get('http://localhost:8081/read/' + id)
            .then(res => {
              console.log(res);
              setValues(prevValues => ({ ...prevValues, name: res.data[0].name, email: res.data[0].email }));
            })
            .catch(err => console.log(err));
        }
      }, [id]); // Include 'id' in the dependency array

      const handleEdit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8081/update/" + id, values)
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
            <form onSubmit={handleEdit}>
                <h2>Edit Student</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' value={values.name} className='form-control' 
                    onChange={e => setValues(prevValues => ({ ...prevValues, name: e.target.value }))}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' value={values.email} className='form-control' 
                    onChange={e => setValues(prevValues => ({ ...prevValues, email: e.target.value }))}/>
                </div>
                <Link to='/' className='btn btn-primary me-2'>Back</Link>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default Edit
