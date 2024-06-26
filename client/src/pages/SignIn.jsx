import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice';


export default function SignIn() {

  const [formData, setFormData] = useState({});
  const {loading,error} = useSelector((state) => state.user);
  // const [loading,setLoading] = useState(false);
  // const [error,setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    }); 
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    try{
      dispatch(signInStart());
      // setLoading(true);
     
      const res = await fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
            'Content-Type' : 'application/json',
          },
          body:JSON.stringify(formData),
        }
      );
      const data = await res.json();
  
      
      if(data.success === false){
        dispatch(signInFailure(data.message));

        // setError(data.message);
        // setLoading(false);
        return;
      }
      dispatch(signInSuccess(data));
      // setLoading(false);
      // setError(null);
      navigate('/');
    }
    catch(error){
      dispatch(signInFailure(data.message));
      // setLoading(false);
      // setError(error.message);
    }

    
  
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>

      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {/* <input type="text" placeholder='UserName' className='border p-3 rounded-lg' id='username' onChange={handleChange}/> */}
        <input type="email" placeholder='Email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>

        <button 
            disabled = {loading}
            className='bg-slate-700 text-center font-semibold text-white 
                  py-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80' >
                    {loading ? 'Loading...' : 'Sign In'}</button>
        <button> Create account using google</button>

        {error && <p className='text-red-500'>{error}</p>}
      </form>

      <div className='flex gap-2 mt-5'>
        <p> Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
    </div>
  )
}
