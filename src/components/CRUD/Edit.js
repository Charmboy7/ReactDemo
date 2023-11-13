import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function Edit() {
    const {id} = useParams();
   // const nav = useNavigate();
    
    const [product,setProduct] =useState({
        id:"",
        pname:"",
        pprice:"",
        pcompany:"",
        paddress:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:8888/product/${id}`).then((res)=>{
            // console.log(res.data);
            setProduct(res.data)
        }).catch((err)=>{})
    },[])

    const inputHandler = (event)=>{
        //  console.log(event.target.type)
        //  console.log(event.target.name)
        //  console.log(event.target.value)
        setProduct({...product,[event.target.name]:event.target.value})
        }
        const updateproduct = (event)=>{
            event.preventDefault();
            axios.put(`http://localhost:8888/product/${id}`,product).then(()=>{
                window.alert("Product Updated successfully");
                // nav("/dashboard");
            }).catch((err)=>{})
        }
    return (
        <div>
            <h2>This is Edit Component</h2>
            <form onSubmit={updateproduct}>
              <div className='form-group'>
                   <label className='form-label'>Enter Product Name</label>
                   <input type='text' name='pname' className='form-control' onChange={inputHandler} value={product.pname}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Product Price</label>
                   <input type='text' name='pprice' className='form-control' onChange={inputHandler} value={product.pprice}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Product Company</label>
                   <input type='text' name='pcompany' className='form-control' onChange={inputHandler} value={product.pcompany}/>
              </div>
              <div className='form-group'>
                   <label className='form-label'>Enter Product Address</label>
                   <input type='text' name='paddress' className='form-control' onChange={inputHandler} value={product.paddress}/>
              </div>
              <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form> 
        </div>
    )
}



export default Edit
