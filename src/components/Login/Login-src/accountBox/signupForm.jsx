import React, { useContext , useState, SyntheticEvent} from "react";

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



  // let handleSubmit = async (e) => {
    
  // };
  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //   if(cnfPassword===password){
  //     try {
  //       let res = await fetch("", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           name: name,
  //           username: username,
  //           password: password,
  //           cnfPassword: cnfPassword,
  //         }),
  //       });
  //       let resJson = await res.json();
  //       if (resJson.status === 201) {
  //         setUsername("");
  //         setPassword("");
  //         setCnfPassword("");
  //         return <Redirect></Redirect>
  //       } else {
  //         setMessage("Some error occured");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }else{
  //     setMessage("Confirm password is not same as entered password!!");
  //   }
  // }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" value={cnfPassword} onChange={(e) => setCnfPassword(e.target.value)} />
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
      {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
    </BoxContainer>
  );
}
