import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
function Exo() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4000/students/getStudents')
            .then(res => {
                setStudents(res.data);
            })
            .then(console.log(students))

    }, [])
    const [exercices, setExercices] = useState({
        title: '',
        description: '',
        duration: '',
        date: '',
        level: '',
        students: []
    })
    const [ids, setIds] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(exercices);
        axios.post('http://localhost:4000/Exos/addExo', exercices)
            .then(res => console.log(res.data))
    }

    return <div>
        <form onSubmit={handleSubmit} >



            <select
                value={ids}
                onChange={e =>{ setIds(e.target.value);
                    setExercices(
                        {
                            ...exercices,
                            students: [e.target.value]
                        }
                    )
                }}>
                {students.map(o => (
                    <option key={o._id} value={o._id}>{o.firstName}</option>
                ))}
            </select>
            <input
                type="text"
                placeholder='Title'
                onChange={(e) => {
                    console.log(e.target.value);
                    setExercices(
                        {
                            ...exercices,
                            title: e.target.value
                        }
                    )
                }
                }
            />
            <input type="text" placeholder='Description'
                onChange={(e) => {
                    setExercices(
                        {
                            ...exercices,
                            description: e.target.value
                        }
                    )
                }
                }
            />
            <div>
                <label >Duration  :</label>
                <input type="number"
                    onChange={(e) => {
                        setExercices(
                            {
                                ...exercices,
                                duration: e.target.value
                            }
                        )
                    }
                    }
                />
                <label >level  :</label>
                <input type="number"
                    onChange={(e) => {
                        setExercices(
                            {
                                ...exercices,
                                level: e.target.value
                            }
                        )
                    }
                    }
                />
            </div>
            <input type="submit" value="Cree Exercices" />
        </form>
    </div>;
}

export default Exo;
