import { useState, useEffect } from 'react';
import Validation from './Validation.js';
import axios from 'axios';



function SignUpForm({submitForm}) {
    const [inputValues, setValues] = useState({
        email: '',
      });
    
    
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
          ...inputValues,
          [event.target.name]: event.target.value,
        })
      };
    
      const addEmail = () => {
        axios.post('https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge',{
            email: inputValues.email,
          }).then(response => {
              console.log("print",response.data)
          })
          //set the input filed to empty string after submit the form
          setValues('');
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(inputValues));
        setDataIsCorrect(true);
      };
    
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
          submitForm(true);
          addEmail();
        }
      }, [errors]);

    return (
      <div>   
        <form>  
                <input id="m" placeholder="   Email" type='email' name='email' value={inputValues.email} onChange={handleChange} />
                <button onClick={handleFormSubmit}>SUBMIT</button>      
        </form>
        {errors.email && <p className='error-message'>{errors.email}</p>}       
      </div>  
    )
}

export default SignUpForm
