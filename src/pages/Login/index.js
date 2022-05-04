import { Container, Wrapper, Title, Form, Input, Button, Link, Error } from './LoginElements';
import { useState } from "react";
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
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
                    <Link>FORGOT YOUR PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
  )
};

export default Login;