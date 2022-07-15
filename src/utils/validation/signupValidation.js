export default function validateSignup(values) {
    let errors = {}
    let emailRegex = /\S+@\S+\.\S+/
    
    if (!values.first_name.trim() || values.first_name.length < 3) {
        errors.first_name = 'First name should be 3 characters atleast'
    }
    if (!values.last_name.trim() || values.last_name.length < 4) {
        errors.last_name = 'Last name should be 3 characters atleast'
    }

    if (!values.email) {
        errors.email = "Email is required"
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Not a valid email address"
    }

    if(!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password should be 5 cahracters atleast"
    }

    if (values.confirm_pass !== values.password) {
        errors.confirm_pass = "Password does not match"
    }

    return errors
}