import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';


   import { Link } from 'react-router-dom';



 const Viewuser= () => {

    const {id}=useParams();
 const[Person,setPerson]=useState({
    name: '',
    city: '',  
    
 });
 let navigate=useNavigate();
 const myhandler=(event)=>{
    setPerson({...Person,[event.target.name]:event.target.value});
 };
    useEffect((event)=>{
    loaddata();

   },[]);

    
const  handleSubmit=async(event)=>{
   event.preventDefault();
  await axios.put(`http://localhost:1232/person/edituser/${id}`,Person);
   
  navigate("/");



};
 const loaddata= async(event)=>{
  const result=  await  axios.get(`http://localhost:1232/person/getbyid/${id}`);
      setPerson(result.data);


 }
 

  return (
  
    <div>
    <h1 className='centered-text-container'>EDIT-USER</h1>
    <div className='form-container'>
 

    
    <form onSubmit={handleSubmit} className='form-control' mx-900>
     <div>
     <label htmlFor='name'  className='form-label'>Name</label>
    <input type={"text"} id="name" name="name"onChange={myhandler}  value={Person.name} className='form-control' required />
   

     </div>
<div>
    <label htmlFor='city'className='form-label'>City</label>
    <input type={"text"} id="city"name="city"onChange={myhandler}  value={Person.city}className='form-control' required/>


</div>

<div>
<button className='btn btn-primary'>ADDBRO</button>

<Link className='btn btn-outline-danger  mx-2 '  to="/">Canceeled</Link>
</div>
    </form>

</div>
  </div>

  )
}

export default Viewuser;