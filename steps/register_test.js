
var faker = require('@faker-js/faker');

const { I, home_page, register_page } = inject()

Feature('Register new user');

Before(() =>{
  I.amOnPage('/')  
})

Scenario('Create new freelancer account', async () => {
  var email = faker.internet.email()
  var name = faker.name.firstName()
  var user = faker.name.firstName()
  var senha = 'senha123'

  home_page.registerPage()
  register_page.registerFreelancer(name, user, email, senha)

  I.see('Seu cadastro se encontra em aprovação.')

});


Scenario('Create new contractor account', async () => {
  var email = faker.internet.email()
  var name = faker.name.firstName()
  var user = faker.internet.email()
  var senha = 'senha123'

  home_page.registerPage()
  register_page.registerContractor(name, user, email, senha)

  I.see('Seu cadastro se encontra em aprovação.')

});

Scenario('Dont create duplicate freelancer account', async () => {

  var name = 'aline'
  var email = 'qa.areda@gmail.com'
  var user = 'qa.areda@gmail.com'
  var senha = 'senha123'

  home_page.registerPage()
  register_page.registerFreelancer(name, user, email, senha)
  register_page.msg_error()

});

