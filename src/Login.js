import { Link, useHistory} from 'react-router-dom'
import React from 'react'
import './Login.css'
import { useState } from 'react';
import { auth } from './firebase';


//with useHistory from react router; we can then direct the user to the home page when they create an account

function Login() {
    
    const history = useHistory(); //allows us to programmatically change the url
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // signIn which takes an event, e, since its inside a form
    const signIn = e => {
        e.preventDefault(); //prevent the page from refreshing onClick; since we're working with react
        auth.signInWithEmailAndPassword(email, password) //sign in; the .then is what happens after the authentication, redirect to home, and catch/alert any errors
        .then( auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    }
    
    const register = e =>{
        e.preventDefault();

        //create a user with the email and password thats entered; this firebase function returns and auth object if successfuladditionally we catch any errors that may occur and alert it on the screen the .then is just a check for authentication that it was created correctly and the .catch similarly if any errors occured
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            //if the authentication comes back valid; it will push the home page into the history
            if (auth) {
                history.push('/') 
                //push the home page to the last element of the history stack; this is where react is directed to in every instance https://www.telerik.com/blogs/programmatically-navigate-with-react-router#:~:text=push()%20Method-,history.,Component%20prop%20to%20a%20Route
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                    alt="Amazon logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                
                <form>
                    <h5>E-mail</h5>
                    {/* onChange-> set the email state value to whatever the event target value is; i.e., the value in the textbox when its changed 
                    e-> and event that happens on change, so the typing of the value in the input*/}
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    {/* with type submit, allows enter key to submit the form */}
                    <button 
                    type="submit"
                    onClick={signIn}
                    className="login__signInButton"
                    >
                        Sign In
                    </button>
                </form>
                <p>
                    By signing in you agree to this websites conditions of use & sale. Plese see our Privacy Notice, our cookies notice and our interest-based ads notice
                </p>

                <button onClick={register}
                className="login__registerButton"
                >
                    Create new account
                </button>

            </div>
        </div>
    )
}

export default Login
