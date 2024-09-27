import axios from 'axios';
import React, { useState } from 'react';

export default function SignUp() {

  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [userdob, setUserdob] = useState('');
  const [gender, setGender] = useState('');

  const handleGender = (e) => {
    setGender(e.target.value);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:8080/signUp",{
      username,useremail,userpassword,userdob,gender});
    console.log(resp);
  }
   
  return (
    <div>
    <h2>Sign Up Form</h2>
    <form onSubmit={handleSubmit}>
        <label>USER NAME: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <br /><br />

        <label>EMAIL:</label>
        <input
          type="email"
          name="useremail"
          value={useremail}
          onChange={(e)=>{setUseremail(e.target.value)}}
        />
        <br /><br />

        <label>PASSWORD:</label>
        <input
          type="password"
          name="userpassword"
          value={userpassword}
          onChange={(e) => { setUserpassword(e.target.value)}}/>
          <br /><br />

         <label >DOB:</label>
        <input
          type="date"
          name="userdob"
          value={userdob}
          onChange={(e) => { setUserdob(e.target.value) }}
        />
        <br /><br />

        <label>GENDER:</label>
        <label>
          M
          <input
            type="radio"
            name="gender"
            value="M"
            checked={gender === "M"}
            onChange={handleGender}
          />
        </label> 
        
        <label>
          F
          <input
            type="radio"
            name="gender"
            value="F"
            checked={gender === "F"}
            onChange={handleGender}/>
        </label>

        <label>
          O
          <input
            type="radio"
            name="gender"
            value="O"
            checked={gender === "O"}
            onChange={handleGender}/>
        </label>
               
               
              <br /><br />

              <input type="submit" value="SIGN UP" />
              <br /><br />

        <a href="/">Already have an account? Login instead</a>
    </form>
</div>

  )
}
