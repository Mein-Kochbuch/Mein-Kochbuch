export default function Validator() {

    const validateEmail = (email: string): string | void => {
        const e = email.split("@")
        if (e.length !== 2 ||
            !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))/.test(e[0]) ||
            !/((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e[1])) {
            return "Email not valid!"
        }
    }

    const validatePassword = (password1: string, password2: string): string | void => {
        if (password1 !== password2) {
            return "Passwords do not match!"
        }
        if (password1.length < 8) {
            return "Password too short"
        }
        if (password1.length > 1024) {
            return "Password too long"
        }
        if (!/[a-z]/.test(password1)) {
            return "lowercase letter required"
        }
        if (!/[A-Z]/.test(password1)) {
            return "uppercase letter required"
        }
        if (!/\d/.test(password1)) {
            return "number required"
        }
        if (!/[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password1)) {
            return "special character required"
        }

    }

    return {validatePassword, validateEmail}
}
