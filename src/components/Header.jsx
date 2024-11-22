
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { deleteCookie } from '../utils/common';
import { useEffect, useState } from 'react';
import { getMenu } from '../utils/menu';

import '../components/Header.css'

function Header() {
    const navigate = useNavigate()

    const {userInfo, setUserInfo} = useUser()
    const [menu, setMenu]=useState([])

    //function to fetch user data and set state 
    useEffect(()=>{
        if(userInfo) setMenu(getMenu(userInfo.role)) //update menu when user info changes
        else setMenu([])


    },[userInfo])



    const logout=()=>{
        deleteCookie('_USER_AUTH_');
        setUserInfo(null) // update userinfo state 
        navigate('/')
        setMenu([])


    }

  return (
    <Navbar  style={{background:"#22a6b3"}}  className="">
      <Container style={{ fontWeight:600}} >
        <Navbar.Brand >RBAC </Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

          {menu.map((item, index)=>{
            return <NavLink key={index} className="ms-2 nav-link" to={item.path} >{item.displayName}</NavLink>
          })} 

            {userInfo ?
                <Button variant='danger' style={{background:'#00cec9',color:'black'}} onClick={logout} >Logout </Button> 
                :
                <Button variant='primary' style={{background:'#00cec9',color:'black'}}>  <NavLink to="/" className='text-black' >Login</NavLink></Button>
             }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;