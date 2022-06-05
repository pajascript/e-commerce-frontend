import { Container, Wrapper, Title, Form, Input, Agreement, Button } from './RegisterElements';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [passError, setPassError] = useState("")
    const navigate = useNavigate();
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {firstname, lastname, username, email, password, confirmPassword})
    }

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name" onChange={e => setFirstname(e.target.value)} />
                    <Input placeholder="Last Name" onChange={e => setLastname(e.target.value)} />
                    <Input placeholder="Username" onChange={e => setUsername(e.target.value)} />
                    <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <Input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <Input type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)}  />
                    {error && <div style={{color: "red"}}>Something went wrong, Invalid Credentials</div>}
                    {passError && <div style={{color: "red"}}>{passError}</div>}
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button onClick={handleClick} >CREATE</Button>
                    <button style={{marginLeft: 10}} onClick={handleLinkClick}>Sign In</button>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Register;