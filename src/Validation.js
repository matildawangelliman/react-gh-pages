// import SignUpForm from './SignUpForm';

function Validation (inputValues) {
    let errors = {};
    //rules for validation
    if (!inputValues.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
        errors.email = "Email is invalid. Please use correct email format."
    }

    return errors;
}

export default Validation;
