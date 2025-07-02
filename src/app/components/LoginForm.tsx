'use client';

import React, {useState} from 'react'
import Button from './Button'

const LoginForm = () => {
    const [matricNumber, setMatricNumber] = useState('');
    const [password, setPassword] = useState('')


    const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevents

        const storedMatric = 'CS20230200712';
        const storedPassword = '123456'

        //
        if (matricNumber == storedMatric && password == storedPassword) {
            console.log("Login Successful");
        } else {
            alert('Invalid Credentials...')
            return;
        }
    }
  return (
    <div className="flex-center">
          <form style={{ marginBlock: "30px" }} onSubmit={handleForm}>
              <h3 style={{fontSize: 24, fontWeight: 600, marginBottom: 20, textAlign: 'center'}}>Login to continue.</h3>
            <label htmlFor="Title">Matric Number</label>
            <input type="text" name="userMatric" id="userMatric" value={matricNumber} onChange={(e) => setMatricNumber(e.target.value)}/>
            <label htmlFor="Title">Password</label>
            <input type="password" name="userPassword" id="userPassword" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button text='Login' type="submit"/>
        </form>
   </div>
  )
}

export default LoginForm