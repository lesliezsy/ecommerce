import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

// 要存user輸入的資料，所以用class
class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault(); // in order to get all control

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' }) // to clean out the fields
        } catch (err) {
            console.log(err);
        }

    }

    handleChange = event => {
        console.log(event.target);
        const { value, name } = event.target; // if user is typing email, the name will be email and the value will be what he is typing in.

        this.setState({ [name]: value }); 
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="password" required />

                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn;