class Valid2 extends Valid {
    constructor(email, emailError, password, passwordError, isValid) {
        super(email, password, isValid)
        this.emailError = emailError
        this.passwordError = passwordError
    }
    validate() {
        if (this.password.length < 6) {
            this.isValid = false
            this.passwordError = 'min length 6'
        } else {
            this.isValid = true
        }
        if (this.email.length === 0) {
            this.isValid = false
            this.emailError = 'email empty'
        } else {
            this.isValid = ''
            this.emailError = ''
        }
    }
}