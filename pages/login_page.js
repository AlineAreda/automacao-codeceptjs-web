const { I } = inject();

module.exports = {

  fields: {
    user: '#user_login',
    password: '#user_pass',
    resetPassword: '.jet-login-lost-password-link'
  },

  button: {
    submit: '#wp-submit'
  },

  loggedUser(user, password) {  
    I.fillField(this.fields.user, user)
    I.fillField(this.fields.password, secret(password))
    I.click(this.button.submit)
  },

  shouldMessage(message) {
    I.see(message)
  }
}

