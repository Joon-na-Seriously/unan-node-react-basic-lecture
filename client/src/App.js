import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'
import VideoUploadPage from './components/views/VideoUploadPage/VideoUploadPage';


export default function App() {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">랜딩페이지</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/register">레지스터</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route exact path="/"  component = {Auth(LandingPage,null )}> 
            {/* <LandingPage />  를 Route 태그안에 넣어주거나 혹은 <Route component = {LandingPage} 둘다 가능 .*/}
          </Route>

          <Route path="/login" component = {Auth(LoginPage, false)} />
          <Route path="/register" component = {Auth(RegisterPage, false)} /> 
          <Route path="/video/upload" component = {Auth(VideoUploadPage, true)} /> 

        </Switch>
      </div>
    </Router>
    </div>
  )
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}