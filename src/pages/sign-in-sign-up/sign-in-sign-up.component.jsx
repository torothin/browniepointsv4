import React from 'react';
import WelcomeText from '../../components/welcome-text/welcome-text.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-sign-up.styles.scss';

const SignInSignUp = () => (
    <div className='sign-in-sign-up'>
        <WelcomeText />
        <div className='signing-options'>
            <SignIn />
            <SignUp />
        </div>
    </div>
)

export default SignInSignUp;