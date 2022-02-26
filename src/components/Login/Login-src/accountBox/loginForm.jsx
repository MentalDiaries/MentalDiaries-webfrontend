import React, { useContext } from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';





export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      let resJson = await res.json();
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
      } else if (resJson.status === 500) {
        setMessage('Some error occured');
      }
      setRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" placeholder="username" />
        <Input type="password" placeholder="Password" />
        <Marginer direction="vertical" margin={10} />
        <Marginer direction="vertical" margin="1.6em" />
<<<<<<< HEAD
        <SubmitButton type="submit" onClick={handleSubmit}>
          Sign in
        </SubmitButton>
      </FormContainer>
=======
        <SubmitButton type="submit">Sign in</SubmitButton>
      </FormContainer>
      
>>>>>>> d49a380a3943a7246d9d6b4427f9420efadff3f7
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Don't have an account </MutedLink>
      <BoldLink href="#" onClick={switchToSignup}>
        Sign up
      </BoldLink>
    </BoxContainer>
  );
}
