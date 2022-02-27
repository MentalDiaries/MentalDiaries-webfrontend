import React, { useContext, useState, SyntheticEvent } from 'react';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Message,
} from './common';
import { Marginer } from '../marginer';
import { AuthContext } from '../../../../AuthProvider';

export function SignupForm(props) {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const [message, setMessage] = useState('');

  let handleSubmit = async (e) => {
<<<<<<< HEAD
    if(cnfPassword===password){
      
    
      // try {
      //   let res = await fetch("", {
      //     method: "POST",
      //     body: JSON.stringify({
      //       username: username,
      //       password: password,
      //     }),
      //   });
      //   let resJson = await res.json();
      //   if (resJson.status === 201) {
      //     setUsername("");
      //     setPassword("");
      //     setCnfPassword("");
      //     setRefresh(resJson.data.refresh);
      //     setAccess(resJson.data.access);
      //   } else if(resJson.status === 405){
      //     setMessage("User Already Registered");
      //   }else{ 
      //      setMessage("Some error occurred");
      //   }
      // } catch (err) {
      //   console.log(err);
      // }
      setRedirect(true);
    }else{
      setMessage("Confirm password is not same as entered password!!");
=======
    if (cnfPassword === password) {
      try {
        let res = await fetch('', {
          method: 'POST',
          
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        });
        let resJson = await res.json();

        // NOTE: Successful
        if (resJson.status === 201) {
          localStorage.setItem('username', username);
          localStorage.setItem('refreshToken', resJson.data.refresh);
          localStorage.setItem('accessToken', resJson.data.access);
          setUser({
            username: username,
            refreshToken: resJson.data.refresh,
            accessToken: resJson.data.access,
          });
          setUsername('');
          setPassword('');
          setCnfPassword('');
        } else if (resJson.status === 405) {
          setMessage('User Already Registered');
        } else {
          setMessage('Some error occurred');
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setMessage('Confirm password is not same as entered password!!');
>>>>>>> 0333ed6c8043834988ab39d7e41b84626efaf4e6
    }
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          value={cnfPassword}
          onChange={(e) => setCnfPassword(e.target.value)}
        />
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={handleSubmit}>
          Sign up
        </SubmitButton>
      </FormContainer>

      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign in
        </BoldLink>
      </MutedLink>
      <Message>{message ? <p>{message}</p> : null}</Message>
    </BoxContainer>
  );
}
