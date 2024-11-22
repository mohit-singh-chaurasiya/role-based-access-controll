import React from 'react';
import '../pages/User.css' // Optional: For custom styles
import { useUser } from '../contexts/UserContext';
const UserInfo = () => {
  const { userInfo } = useUser();
  console.log("INFO",userInfo)
  return (<div style={{display:'flex',justifyContent:'center',marginTop:100,}} >
    <div className='column' style={{ display: 'flex', justifyContent: 'space-evenly', width: "50%",   margin: 10 ,border:'2px solid black',padding:18,boxShadow:'5px 5px 15px 5px grey',borderRadius:30}} >
      <div style={{padding:'15',display:'flex',justifyContent:"center",alignItems:'center'}}>
        
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToonwNT4zbwCyq-k-qAzXexPn6URz3gT4BxQ&s" width={300} style={{borderRadius:50}} />
      </div>

      <div>
      <h1> Name:- {userInfo.firstname}{" "}{userInfo.lastname}</h1>
      
        <h6>User ID: {userInfo.userid}</h6>
        <h6>Email: {userInfo.email}</h6>
        <h6>Mobile: {userInfo.mobile}</h6>
        <h6>Addresss: {userInfo.address}</h6>
        <h6>City: {userInfo.city}</h6>
      
       
        das
      </div>
      <div>

      </div>
    </div>
   </div>
  );
};

export default UserInfo;
