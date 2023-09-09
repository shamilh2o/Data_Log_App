import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import backgroundImage from '../src/images/school.jpg';

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8081/")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete("http://localhost:8081/delete/" + id)
        .then(res => {
            window.location.reload();
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
            <h2>Student List</h2>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Create +</Link>
            </div>
            <table className='table'>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {data.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>
                                <Link to={`/read/${student.id}`} className='btn btn-sm btn-info'>Read</Link>
                                <Link to={`/edit/${student.id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                <button onClick={() => handleDelete(student.id)} className='btn btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
