import React from 'react';
import { useState } from 'react';
import axios from 'axios';
function Student() {
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        group: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:4000/students/addStudent', student)
            .then(res => console.log(res.data));
       
    }
    return <div>
        <form onSubmit={handleSubmit} style={{display:"flex" , flexDirection:"column"}} >
            <input
                type="text"
                placeholder='FirstName'
                required
                onChange={(e)=>{
                    setStudent({
                        ...student,
                        firstName: e.target.value
                    })
                }}
            />
            <input
                type="text"
                placeholder='LastName'
                required
                onChange={(e) => {
                    setStudent({
                        ...student,
                        lastName: e.target.value
                    })
                }}

            />
            <input
                type="text"
                placeholder='Email'
                required
                onChange={(e) => {
                    setStudent({
                        ...student,
                        email: e.target.value
                    })
                }}

            />
            <input
                type="number"
                placeholder='group'
                required
                onChange={(e) => {
                    setStudent({
                        ...student,
                        group: e.target.value
                    })
                }}
            />
            <input type="submit" value="Add Student" />
        </form>
    </div>;
}

export default Student;
