import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {
  
  const[person,setPerson]=useState([]);
  useEffect(()=>{
    myperson();
  },[]);
 const myperson=async()=>{
  const result=   await axios.get("http://localhost:1232/person/getall");
  setPerson(result.data);
 }

  return (
  
         

  

    <div >
   <div className='container'>
   <div className='py-4'>
   <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>
   
    </tr>
  </thead>
  <tbody >
{
person.map((person,index)=>(

    <tr>
      <th scope="row"key= {index}>{index+1}</th>
      <td>{person.name}</td>
      <td>{person.city}</td>
       <td>
       <Link className='btn btn-primary mx-2' to={`/viewperson/${person.id}`}>VIEW</Link>
       <Link className='btn btn-outline-primary mx-2'
         to= {`/edituser/${person.id}`}>EDIT</Link>
       <Link className='btn btn-danger mx-2' to={`/deletebyid/${person.id}`}>Delete</Link>


       </td>
    </tr>
))

}
  



    
  </tbody>
</table>


   </div>



   </div>



    </div>
  )
}

export default Home