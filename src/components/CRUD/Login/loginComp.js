import axios from 'axios';
import React, { useRef } from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

const LoginComp=()=> {

    // const nav = useNavigate();
   
    let userId=useRef();
    let userPass=useRef();

    const[userData,setUserDate]=useState([])

    const loginUser=()=>{

        const uid=userId.current.value;
        const upass=userPass.current.value;

        axios.get("http://localhost:8888/userTable").then((res)=>{
            setUserDate(res.data);
            const data=userData.filter((val)=>{return val.username===uid && val.password===upass});
            if(data.length>0){
                sessionStorage.setItem("user",uid);
                window.alert("Login Successfull as User")
                
                // nav("/userPage");
            }
            else {
                // If not a user, check for admin login
                axios.get("http://localhost:8888/adminTable").then((adminRes) => {
                  const adminLogin = adminRes.data.find((val) => val.username === uid && val.password === upass);
        
                  if (adminLogin) {
                    sessionStorage.setItem("user", uid);
                    window.alert("Login successful as Admin");
                    // Redirect to admin page (use react-router-dom or window.location)
                  } else {
                    window.alert("Login Failed")
                   // setErrorMessage('Wrong Credentials');
                    userId.current.value = "";
                    userPass.current.value = "";
                  }
                }).catch((err) => {
                  console.error(err);
                 // setErrorMessage('Error during login');
                });
              }
            }).catch((err) => {
              console.error(err);
             // setErrorMessage('Error during login');
            });

    }


    return (
        <div >
          
            <h1>Login Page</h1>
            <form className='myform' style={{height:250,width:150,}}>
                <div>
                <label>Enter User Id</label>
                <input type='text' name='userid' ref={userId}  className='form-control' /></div>
                <div>
                <label>Enter User Password</label>
                <input type='password' name='userpass' ref={userPass}  className='form-control' /></div>
                <button type='button' className='btn btn-success mt-2' onClick={loginUser}>Login</button>
            </form>
        </div>
        
    )
}

export default LoginComp
