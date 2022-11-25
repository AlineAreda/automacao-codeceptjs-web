
var faker = require('@faker-js/faker');

const {I, home_page, login_page} = inject()

Feature('Login');

Scenario('Should logged sucess', async () => {

    I.amOnPage('/')
    
    home_page.loginPage()
    login_page.loggedUser('qa.areda@gmail.com','senha123')
    login_page.shouldMessage('Encontre profissionais especializados em WordPress.')

});





