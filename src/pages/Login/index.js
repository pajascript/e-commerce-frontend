import { Container, Wrapper, Title, Form, Input, Button, Link, Error } from './LoginElements';
import { useState } from "react";
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  }

  const handleLinkClick = (e) => {
    e.preventDefault()
    navigate("/register")
  }

  return (
    <Container>
            <Wrapper>
                <Title>LOG IN</Title>
                <Form>
                    <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button onClick={handleClick} disabled={isFetching} >LOGIN</Button>
                    {error ? <Error>Incorrect username or password</Error> : null}
                    <button onClick={handleLinkClick} style={{border: "none", textDecoration: "underline", cursor: "pointer"}}>CREATE ACCOUNT</button>
                </Form>
            </Wrapper>
        </Container>
  )
};

export default Login;