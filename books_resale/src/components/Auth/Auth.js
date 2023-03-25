import React,{useState} from 'react';
import './Auth.css'
import Logo from '../../images/logo.png'


function  Auth () {
  const [IsLogin, setIsLogin]=useState(true);
  // console.log(setdata);
  const ToggleLogin=()=>{
    IsLogin(!IsLogin)
  }
  return (
    IsLogin ? (
      <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder='First Name'
          className='infoInput' name='firstname'/>
           <input type="text" placeholder='Last Name'
          className='infoInput' name='lastname'/>
        </div>
        <div>
          <input type="text" placeholder='Username'
          className='infoInput' name='username'/>
        </div>
        <div>
          <input type="password" placeholder='Password'
          className='infoInput' name='password'/>
           <input type="password" placeholder='Confirm Password'
          className='infoInput' name='confirmpassword'/>
        </div>
        <div>
          <p > Already have an account. <button onClick={ToggleLogin}>Log In</button></p>
          {/* <button onClick ={()=>setcount(count+1)}> LogIn</button>
          { 
            count && <LogIn/>
          } */}
        </div>
        <button className='button infoButton' type='submit'>Signup</button>
      </form>
    </div>
    ) : 
    (
      <div className="a-right">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input type="text" placeholder='Username'
          className='infoInput' name='username'/>
        </div>
        <div>
          <input type="text" placeholder='Password'
          className='infoInput' name='password'/>
        </div>
        <div>
          <span > Don't have an account!</span>
          {/* <button className='button infoButton' type='submit'>Signup</button> */}
          <button onClick={ToggleLogin}>Signup</button>
        </div>
        <button className='button infoButton' type='submit'>LogIn</button>
      </form>
    </div>
    )
    // <div className="Auth">
    //   <div className="a-left">
    //     <img src={Logo}  alt=""/>
    //     <div className="Webname">
    //       <h1>Book Resale</h1>
    //       <h6>Use it, resale it</h6>
    //     </div>
    //   </div>
    //   <SignUp/>
    // </div>
  );
};



// function SignUp(){
//   const [count, setcount]=useState(0);
//   return (

//   )
// }

// function LogIn(){
//   return (
    
//   )
// }

export default Auth;
