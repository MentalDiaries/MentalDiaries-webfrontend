import React, { useContext, useState } from 'react';
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
import { AccountContext } from './accountContext';
import { AuthContext } from '../../../../AuthProvider';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      console.log('username: ', username, 'password: ', password);
      let res = await fetch(
        'https://mental-diaries.herokuapp.com/api/users/login/',
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
      if (
        resJson.detail === 'No active account found with the given credentials'
      ) {
        setMessage(resJson.detail);
        throw new Error('No active account found with the given credentials');
      }

      // NOTE: User Exists
      localStorage.setItem('username', username);
      localStorage.setItem('refreshToken', resJson.refresh);
      localStorage.setItem('accessToken', resJson.access);

      // Context
      setUser({
        username: username,
        refreshToken: resJson.refresh,
        accessToken: resJson.access,
      });
      setUsername('');
      setPassword('');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit}>
          Sign in
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Don't have an account </MutedLink>
      <BoldLink href="#" onClick={switchToSignup}>
        Sign up
      </BoldLink>
      <Marginer direction="vertical" margin={10} />
      <Message>{message ? <p>{message}</p> : null}</Message>
    </BoxContainer>
  );
}
