const { I } = inject();

module.exports = {

  fields: {

    filter : 'input[type=search]'    
  },

  button: {
    login: '#login-btn',
    register: 'Criar Conta',
    be_a_part : 'FAÇA PARTE'
  },


  messages: {
    message: 'Encontre profissionais especializados em WordPress.'
  },

  loginPage() {
    I.click(this.button.login)
  },

  registerPage() {
    I.click(this.button.register)
  }



}
