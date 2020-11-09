import React, { useState } from 'react'
import './Login.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import {Button} from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'
import {auth} from './firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth){
            history.push('/')
            }
        }).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <TwitterIcon className="twitterIcon" />
            </Link>
            <h2 className="login__message">Log in to Twitter</h2>
            <form className="login__form">
                <span>Email</span>
                <input className="login__input" type="text" onChange={e => setEmail(e.target.value)}/>

                <span>Password</span>
                <input type="text" className="login__input" onChange={e => setPassword(e.target.value)} />

                <Button onClick={signIn} className="loginBtn">Log In</Button>
            </form>
            <button onClick={register} className="login__register">Sign up for Twitter</button>
            <footer className="footer__one">Disclaimer: This website was created for the purpose of testing the coder's web development capabilities. So no need to sue, honestly</footer>
            <footer className="footer__two">© Twitter Clone. No rights reserved - this is a demo</footer>
            <footer className="footer__three">Privacy · Terms · Sitemap · Details</footer>
            <footer className="footer__last">Coded by 8lum3CT0</footer>
        </div>
    )
}

export default Login
