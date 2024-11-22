import React from 'react'
import { useUser } from '../contexts/UserContext';
import '../pages/Dashboard.css'
const Dashboard = () => {
  const { userInfo } = useUser();
  return (
    <div className='root' > 
    <h3 style={{ textAlign:'center',padding:'10px'}} >Dashboard </h3>
      <table className='table' >
        <tr  className='main'>
          <td>Role</td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>EmailID</td>
          <td>Mobileno.</td>
          <td>Password</td>
        </tr>
        <tr className='main' >
          <td>{userInfo.role}</td>
          <td>{userInfo.firstname}</td>
          <td>{userInfo.lastname}</td>
          <td>{userInfo.email}</td>
          <td>{userInfo.mobile}</td>
          <td>{userInfo.password}</td>
        </tr>
      </table>
    </div>
  )
}

export default Dashboard;
