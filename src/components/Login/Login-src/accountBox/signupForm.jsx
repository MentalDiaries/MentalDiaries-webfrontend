import React, { useContext , useState, SyntheticEvent} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Message,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";



export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [message, setMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [access, setAccess] = useState(false);
  const [refresh, setRefresh] = useState(false);

 
  let handleSubmit = async (e) => {
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
      //     setRefresh(resJson.refresh);
      //     setAccess(resJson.access);
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
    }
  }
  if(redirect){
    switchToSignin()
  }
  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" required value={cnfPassword} onChange={(e) => setCnfPassword(e.target.value)} />
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Sign up</SubmitButton>
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
