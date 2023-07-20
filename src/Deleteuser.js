import axios from 'axios';
import React, {  useState } from 'react'
import { Await,  useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Deleteuser = () => {
   const{id}= useParams()


    const mydel=(event)=>{
        
         axios.delete(`http://localhost:1232/person/deletebyid/${id}`)
         .then((response)=>{}).catch((error)=>{console.error('Error',error)});
         
    }
    
    mydel();
     
  return ( 
    <div>
    {<div>
       <h1>user deleted successfully</h1>
       <Link className='btn btn-primary mx-18' to='/'>GO TO HOME</Link>
       </div>
    }

    </div>
  )
}

export default Deleteuser