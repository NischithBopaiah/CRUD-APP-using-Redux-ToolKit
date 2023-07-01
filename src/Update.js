import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './userReducer'

function Update() {
    const {id } = useParams()
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const existingUser = users.filter((f) => f.id == id )
    const { name , email } = existingUser[0];

    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)

const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail
    }))
    navigate('/')
}


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>

            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input 
                        type='text' 
                        name='name' 
                        value={uname}
                        onChange={e => setName(e.target.value)}
                        className='form-control' 
                        placeholder='enter name'></input>

                    </div>
                    <div>
                        <label htmlFor='name'>Email:</label>
                        <input 
                        type='email' 
                        name='email' 
                        value={uemail}
                        onChange={e => setEmail(e.target.value)}
                        className='form-control' 
                        placeholder='enter email'
                       
                        ></input>
                    </div><br />
                    <button className='btn btn-info'>Update</button>
                </form>

            </div>

        </div>
    )
}

export default Update