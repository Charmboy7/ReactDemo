import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
function ImageTestComp() {


    const[product,setProduct]=useState([])

    const fetchData=()=>{
        axios.get("http://localhost:8888/test").then((res)=>{
           console.log(res.data)
           setProduct(res.data)
        }).catch((err)=>{})
    }

   useEffect(()=>{
    fetchData();
   },[])


    return (
        <div>
            <h1>Image Component Works</h1>
            <table  className='table table-hover table-striped'>
                <thead><th>Id</th><th>Image</th><th>Date</th></thead>
                <tbody>
                    {
                       product.map((val)=>{
                        return <tr>
                            <td>{val.id}</td>
                            <td><img src={val.image}></img></td>
                            <td>{val.date}</td>
                            
                        </tr>

                    })
                    }
                    </tbody>
            </table>
           
        </div>
    )
}

export default ImageTestComp
