import React, {useState} from 'react'
import SignUpForm from './SignUpForm.js';
import SignUpSuccess from './SignUpSuccess.js';

const SignUp = () => {
    const [formIsSubmit, setFormIsSubmitted] = useState(false);
    
    // Note: need to understand this line better, why do I need to set it to true here?
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return (
        <div>
            {/* if user sign up sucessfully, we show the message of: Your Account Is Created! from the signUpSuccess; else give the form again */}
            {!formIsSubmit ? <SignUpForm submitForm={submitForm}/> : <SignUpSuccess/>}
            {/* <SignUpForm submitForm={submitForm} />  */}
        </div>
    )
};

export default SignUp;