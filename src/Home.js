import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

import { Link } from 'react-router-dom'
import { deleteUser } from './userReducer'



export default function Home() {

  const users = useSelector((state) => state.users)
const dispatch = useDispatch()
  const handleDelete = (id) => {

    dispatch(deleteUser({id:id}))

  }

  console.log('users',users)
  return (
   <div className='container'>


<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Much longer nav link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
  
        <div id='header'>
    <Link to='/create' className='btn btn-success my-3'>Create</Link>
    </div>
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th> 
        </tr>
      </thead>
      <tbody>

{users.map((user, index)=> (
  <tr key={index}>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>
      <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>edit</Link>
      <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>delete</button>
    </td>
  </tr>
))}
      </tbody>

    </table>

   </div>
  )
}
