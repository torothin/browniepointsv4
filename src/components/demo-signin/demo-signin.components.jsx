import React from 'react';
import './demo-signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class DemoSignin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'mike@gmail.com',
            password: 'testtest',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
            
        } catch (error) {
            console.error(error);
        }


    }

    render() {
        return (
            <div className='sign-in'>
                
                <CustomButton onClick={ this.handleSubmit }>
                    Demo Signin
                </CustomButton>
            </div>
        )
    }
}

export default DemoSignin;