import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardHeader, CardContent, Typography, Button, Container } from '@mui/material';
import backgroundImage from '../src/images/student.jpg';

function Read() {
  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get('http://localhost:8081/read/' + id)
        .then(res => {
          console.log(res);
          setStudent(res.data[0]);
        })
        .catch(err => console.log(err));
    }
  }, [id]); // Include 'id' in the dependency array

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
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ maxWidth: 400 }}>
          <CardHeader title="Student Details" />
          <CardContent>
            <Typography variant="subtitle1">
              <strong>ID:</strong> {student.id}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Name:</strong> {student.name}
            </Typography>
            <Typography variant="subtitle1">
              <strong>Email:</strong> {student.email}
            </Typography>
          </CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Button component={Link} to="/" variant="contained" color="primary">
              Back
            </Button>
            <Button component={Link} to={`/edit/${student.id}`} variant="contained" color="info">
              Edit
            </Button>
          </div>
        </Card>
      </Container>

    </div>
  )
}

export default Read
