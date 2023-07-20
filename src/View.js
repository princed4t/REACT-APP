import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const View = () => {
  const {id}=useParams();

  const[Person,Setperson]=useState([]);
  useEffect(()=>{
    callapi();
  },[]);

  const callapi=async(event)=>{
    const result=  await axios.get(`http://localhost:1232/person/getbyid/${id}`);
    Setperson(result.data);
    console.log(result.data);


  }
  







  return (
    <div className='container'>
    <div className='py-4'>
    <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Personid</th>
      <th scope="col">Name</th>
      <th scope="col">city</th>
    </tr>
  </thead>
  <tbody>
    {
       

        <tr>
      <th scope="row">{Person.id}</th>
      <td>{Person.name}</td>
      <td>{Person.city}</td>
      <Link className='btn btn-danger' to="/">Home</Link>
    </tr>
 

    

    }




   
   
  </tbody>
</table>
    
    
    
    </div>
    </div>
  )
}

export default View