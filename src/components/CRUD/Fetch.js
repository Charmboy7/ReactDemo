import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouterProps,Routes,Route, BrowserRouter, Link } from 'react-router-dom'
import Edit from './Edit'
import InsertData from './InsertData'


const Fetch = () => {

    const[product,setProduct]=useState([])

     const fetchData=()=>{
         axios.get("http://localhost:8888/product").then((res)=>{
            console.log(res.data)
            setProduct(res.data)
         }).catch((err)=>{})
     }

    useEffect(()=>{
     fetchData();
    },[])

    const deleteProduct=(id)=>{
        if(window.confirm(`Are you Sure to Delete with the ProdutId ${id}`)){
            axios.delete(`http://localhost:8888/product/${id}`).then(()=>{
                window.alert("Product Deleted Succssfully")
                 fetchData();
            }).catch((err)=>{})
        }
    }

    

    return (
        <div>
         
         <BrowserRouter>
         <Routes>
            <Route path="editcomp/:id" element={<Edit></Edit>}></Route>
         </Routes>
         </BrowserRouter>
        
        

            <h2>Insert commponent Works</h2>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr><th>Id</th>
                    <th>Name</th><th>Price</th><th>Company</th><th>Address</th><th>Edit</th><th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((val)=>{
                            return <tr>
                                <td>{val.id}</td>
                                <td>{val.pname}</td>
                                <td>{val.pprice}</td>
                                <td>{val.pcompany}</td>
                                <td>{val.paddress}</td>
                               <td>
                               {/* <Link to={`/editpage/${val.id}`} className='btn btn-outline-success btn-sm'>
                                </Link>
                                 */} Edit
                                </td> 
                                <td><button onClick={()=>deleteProduct(val.id)}>Delete</button></td>
                            </tr>

                        })
                    }
                </tbody>
            </table> 
       
        </div>
    )
}

export default Fetch
