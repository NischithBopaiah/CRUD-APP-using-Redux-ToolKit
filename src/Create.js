import React, { useState } from 'react'
import { addUser } from './userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Create() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)


const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(addUser({
        id:users[users.length - 1].id + 1 , //add id + 1 
        name,
        email
    }))

    navigate('/')

}
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>

            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add new User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input 
                        type='text' 
                        name='name' 
                        onChange={e => setName(e.target.value)}
                        className='form-control' 
                        placeholder='enter name'></input>

                    </div>
                    <div>
                        <label htmlFor='name'>Email:</label>
                        <input 
                        type='email' 
                        name='email' 
                        className='form-control' 
                        placeholder='enter email'
                        onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div><br />
                    <button className='btn btn-info'>Submit</button>
                </form>

            </div>

        </div>
    )
}
