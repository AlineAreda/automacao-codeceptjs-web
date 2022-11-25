const { I } = inject();

module.exports = {

  fields: {
    nameFreela: 'name_freela',
    userFreela: 'user-freela',
    emailFreela: 'email-freela',
    passdFreela: 'password-freela',
    nameCtn: 'nome-ctn',
    userCtn: 'user-ctn',
    emailCtn: 'email-ctn',
    passCtn: 'password-ctn'

  },

  button: {
    buttonRegisterFreela: 'Criar Conta Freelancer',
    buttonRegisterCtn: 'Criar Conta Contratante'

  },

 messages: {
  msg_error: 'This email address is already used.'

  },

  registerFreelancer(name, user, email, password) {
    I.fillField(this.fields.nameFreela, name)
    I.fillField(this.fields.userFreela, user)
    I.fillField(this.fields.emailFreela, email)
    I.fillField(this.fields.passdFreela, secret(password))
    I.click(this.button.buttonRegisterFreela)
  },

  registerContractor(name, user, email, password) {
    I.fillField(this.fields.nameCtn, name)
    I.fillField(this.fields.userCtn, user)
    I.fillField(this.fields.emailCtn, email)
    I.fillField(this.fields.passCtn, secret(password))
    I.click(this.button.buttonRegisterCtn)
  },

  msg_error() {
    I.see(this.messages.msg_error)
  }
}
