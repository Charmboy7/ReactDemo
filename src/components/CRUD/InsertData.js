import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function InsertData() {

    const [product,setProduct] =useState({
        pname:"",
        pprice:"",
        pcompany:"",
        paddress:""
    })

   const addData=(event)=>{
    event.preventDefault();
    //console.log(product)
    axios.post("http://localhost:8888/product",product).then(()=>{
        console.log(product)
    window.alert("Product Added Successfully")

    }).catch((err)=>{})

   }

   const inputHandler = (event)=>{
    //  console.log(event.target.type)
    //  console.log(event.target.name)
    //  console.log(event.target.value)
    setProduct({...product,[event.target.name]:event.target.value})
    }

    return (
        <div>
           <div class="container mt-5" style={{height:'100', width:250}}>
        <form onSubmit={addData}>
            <div class="form-group">
                <label for="pname">Enter Product Name</label>
                <input type="text" id="pname" name="pname" class="form-control" onChange={inputHandler} value={product.pname} />
            </div>

            <div class="form-group">
                <label for="pprice">Enter Product Price</label>
                <input type="text" id="pprice" name="pprice" class="form-control" onChange={inputHandler} value={product.pprice} />
            </div>

            <div class="form-group">
                <label for="pcompany">Enter Product Company</label>
                <input type="text" id="pcompany" name="pcompany" class="form-control" onChange={inputHandler} value={product.pcompany}/>
            </div>

            <div class="form-group">
                <label for="paddress">Enter Product Address</label>
                <input type="text" id="paddress" name="paddress" class="form-control" onChange={inputHandler} value={product.paddress}/>
            </div>

            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
         </div>
        </div>
    )
}

export default InsertData
