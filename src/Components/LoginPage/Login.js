import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../../Config/firebase';
import { useStateValue } from '../../Config/StateProvider';
import { actionTypes } from '../../Config/reducer';

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({ type: actionTypes.SET_USER, user: result.user });
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://cdn.mos.cms.futurecdn.net/" alt="" />
        <h1>Sign in to Slack Clone Project</h1>
        <Button onClick={signIn}>Sigin In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
