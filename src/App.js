import logo from './logo.svg';
import './App.css';
import {
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="" element={<PageOne />} />
        <Route path="pageone" element={<PageOne />} />
        <Route path="pagetwo" element={<PageTwo />} />
        <Route path="pagethree" element={<PageThree />} />
        <Route path="*" element={<div><h1>404!</h1><p>Ikke meget at se her :-).</p></div>}></Route>
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Menu></Menu>
      <Container>
        <Outlet></Outlet>
      </Container>
    </>);
}

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/"><Navbar.Brand>DDU</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/pageone"><Nav.Link>Side 1</Nav.Link></LinkContainer>
            <LinkContainer to="/pagetwo"><Nav.Link>Side 2</Nav.Link></LinkContainer>
            <LinkContainer to="/pagethree"><Nav.Link>Side 3</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}


function PageOne() {
  return (
    <>
    <h1>Side 1</h1>
    <i className="bi bi-alarm"></i>
    </>
  );
}

function PageTwo() {
  return (
    <h1>Side 2</h1>
  );
}

function PageThree() {
  return(
    <h1>Side 3</h1>
  );
  
}


export default App;
