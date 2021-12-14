import React, {useState} from 'react'
import SignUpForm from './SignUpForm.js';
import SignUpSuccess from './SignUpSuccess.js';

function SignUp() {
    const [formIsSubmit, setFormIsSubmitted] = useState(false);
    const submitForm = () => {
        setFormIsSubmitted(true);
    }
    return (
        <div>
            {!formIsSubmit ? <SignUpForm submitForm={submitForm}/> : <SignUpSuccess/>}
        </div>
    )
};

export default SignUp;