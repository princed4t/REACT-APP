import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
import {} from './srk.jpg';

   import { Link } from 'react-router-dom';



 const Adduser = () => {

 const[Person,setPerson]=useState({
    name: '',
    city: '',  
    
 });
 let navigate=useNavigate();
 const myhandler=(event)=>{
    setPerson({...Person,[event.target.name]:event.target.value});
 };
    
const  handleSubmit=(event)=>{
   event.preventDefault();
   axios.post('http://localhost:1232/person/addperson',Person)
   .then((response)=>{}).catch((error)=>{console.error('Error',error)});
  navigate("/");



};
 

  return (
  
    <div>
    <h1 className='centered-text-container'>ADD-USER</h1>
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

export default Adduser