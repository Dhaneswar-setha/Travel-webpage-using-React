import React from 'react'
import styled from "styled-components";
import Footer from './Footer';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1613967193490-1d17b930c1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 45px;
  background-color:black;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: cyan;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function forget() {
    return (
        <div>
    <Container>
      <Wrapper>
        <Title style={{color:"white"}}>FORGOT YOUR PASSWORD</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="Newpassword" />
          <Button><a href="/login" style={{textDecoration:"none",color:"black",fontSize:"20px"}}>Submit</a></Button>
         
        </Form>
      </Wrapper>
     
    
    </Container>
    <Footer />
    </div>
    )
}

export default forget
