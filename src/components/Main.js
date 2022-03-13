import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import './Style.css'
import axios from 'axios'
import { Link } from 'react-router-dom';



function Main() {

    const [user, setUser] = useState([]);

    const getData = async () => {
        const result = await axios.get('https://61ea3a487bc0550017bc65f8.mockapi.io/user')
        // console.log(result.data);
        setUser(result.data)
    }

    useEffect(() => {
        getData();
        // console.log(user.name);
    }, [])

const deleteUser = async (id)=>{
    
    await axios.delete(`https://61ea3a487bc0550017bc65f8.mockapi.io/user/${id}`)
    getData();
}

    return (
        <>
            <Table striped bordered hover variant='dark' responsive="sm">
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Desination</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.desination}</td>
                                <td>{item.city}</td>
                                <td><Link to={`/editUser/${item.id}`}><Button variant="primary">Edit</Button></Link>{" "}
                                    <Button variant='danger' onClick={()=> deleteUser(item.id)}>Delete</Button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </Table>
            <Link to="/addUser"> <button className="btn btn-primary mybutton">Add User</button></Link>

        </>
    )
}

export default Main