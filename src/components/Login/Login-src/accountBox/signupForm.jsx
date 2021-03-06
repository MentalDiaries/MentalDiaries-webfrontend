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
import { AccountContext } from './accountContext';
export function SignupForm(props) {
  const { setUser } = useContext(AuthContext);
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');
  const [message, setMessage] = useState('');

  let handleSubmit = async (e) => {
    if (cnfPassword === password) {
      try {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        let res = await fetch(
          'https://mental-diaries.herokuapp.com/api/users/register/',
          {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }
        );
        let resJson = await res.json();
        setMessage(resJson.Status);
        if (resJson.Status === 'Failure... User already registered')
          throw new Error("'Failure... User already registered'");
        console.log(resJson);
        // NOTE: Successful
        // if (resJson.status === 201) {
        //   localStorage.setItem('username', username);
        //   localStorage.setItem('refreshToken', resJson.data.refresh);
        //   localStorage.setItem('accessToken', resJson.data.access);
        //   setUser({
        //     username: username,
        //     refreshToken: resJson.data.refresh,
        //     accessToken: resJson.data.access,
        //   });
        //   setUsername('');
        //   setPassword('');
        //   setCnfPassword('');
        // } else if (resJson.status === 405) {
        //   setMessage('User Already Registered');
        // } else {
        //   setMessage('Some error occurred');
        // }
      } catch (err) {
        console.log(err);
      }
    } else {
      setMessage('Confirm password is not same as entered password!!');
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
      <Marginer direction="vertical" margin={10} />
      <Message>{message ? <p>{message}</p> : null}</Message>
    </BoxContainer>
  );
}
