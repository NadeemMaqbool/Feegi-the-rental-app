import {useState, useEffect} from 'react';

const useForm = (validate) => {
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [values, setValues] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_pass: '',
        user_type: 'owner'    
    });

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setValues({
            ...values,
            [name] : value
        });
        
    }

    new Promise((resolve, reject) => {
        resolve(setErrors(validate(values)))
    })
    const signupHandler = async (event)=> {
        event.preventDefault();
        setErrors(validate(values))
        setIsSubmitting(true)
    }
    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            formSubmitted();
          }
        },

        [errors]
    );
    const formSubmitted = async () => {
        if (!Object.keys(errors).length > 0) {
            const data = {
                firstName: values.first_name,
                lastName: values.last_name,
                email: values.email,
                password: values.password,
                userType: values.user_type,
            }
                console.log(data, 'Errors:', errors)

            try {
                await fetch('http://localhost:5000/api/users', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Accept':'application/json'            
                    },
                    body: JSON.stringify(data)
                })
                .then(response => {
                    return response.json();
                })
                .then(responseData => {
                    if (!responseData.ok) {
                        console.log(responseData.message);
                        setError(responseData.message);
                    }
                    setIsSignup(true);
                })
                .catch(error => {
                    console.error('Post form error: ', error)
                    setError(error);
                })
            } catch (error) {
                console.log(error)
            }
        }
    }


    return {handleChange, signupHandler, values, errors, isSignup, error}   
}

export default useForm;