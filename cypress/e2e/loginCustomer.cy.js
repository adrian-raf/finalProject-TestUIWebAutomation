describe('login test customer', () => {
  beforeEach(() => {
    cy.visit(
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
    );
  });

  it('Ensure login customer account as Hermoine Granger success', () => {
    cy.get('[ng-click ="customer()"]').click();
    cy.url().should(
      'eq',
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer'
    );
    cy.get('[name="userSelect"]').select('Hermoine Granger');
    cy.get('[name="myForm"]').submit();
    // check selected name appear in page
    cy.get('strong').find('span').should('contain', 'Hermoine Granger');
    //Add deposit
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('10000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    // check balance account after add deposit
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('15096');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('3000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    // show transaction Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    //  check balance account after withdrawl
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('12096');

    // check transaction
    cy.get('[ng-click="transactions()"]').click();
    // pick date
    cy.get('#start').type('2015-01-01T00:00');
    cy.get('#end').type('2022-12-25T00:00');
    // reset transaction
    cy.get('[ng-click="reset()"]')
      .click()
      .get('tbody')
      .should('not.have.value');
    // back to home account
    cy.get('[ng-click="back()"]').click();

    // change currency to pound
    cy.get('select').select('1002').should('have.value', 'number:1002');
    cy.get('[ng-hide="noAccount"]')
      .find('.ng-binding')
      .should('contain', 'Pound');
    //Add deposit
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('30000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    // check balance account after add deposit
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('30000');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('5000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    // show transaction Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    //  check balance account after withdrawl
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('25000');
    // check transaction
    cy.get('[ng-click="transactions()"]').click();
    // Transaction not appear(?)
    // back to home account
    cy.get('[ng-click="back()"]').click();

    // change currency to Rupee
    cy.get('select').select('1003').should('have.value', 'number:1003');
    cy.get('[ng-hide="noAccount"]')
      .find('.ng-binding')
      .should('contain', 'Rupee');
    //Add deposit
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('50000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    // check balance account after add deposit
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('50000');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('20000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    // show transaction Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    //  check balance account after withdrawl
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('30000');
    // check transaction
    cy.get('[ng-click="transactions()"]').click();
    // logout;
    cy.get('.logout').click();
  });

  it('Ensure login customer account as Harry Potter success', () => {
    cy.get('[ng-click ="customer()"]').click();
    cy.url().should(
      'eq',
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer'
    );
    cy.get('[name="userSelect"]').select('Harry Potter');
    cy.get('[name="myForm"]').submit();
    // check selected name appear in page
    cy.get('strong').find('span').should('contain', 'Harry Potter');
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('5000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('5000');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('2000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('3000');
    //check transaction
    cy.get('[ng-click="transactions()"]').click();
    // logout
    cy.get('.logout').click();
  });

  it('Ensure login customer account as Ron Weasly success', () => {
    cy.get('[ng-click ="customer()"]').click();
    cy.url().should(
      'eq',
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer'
    );
    cy.get('[name="userSelect"]').select('Ron Weasly');
    cy.get('[name="myForm"]').submit();
    // check selected name appear in page
    cy.get('strong').find('span').should('contain', 'Ron Weasly');
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('5000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('5000');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('2000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('3000');
    //check transaction
    cy.get('[ng-click="transactions()"]').click();
    // logout
    cy.get('.logout').click();
  });

  it('Ensure login customer account as Albus Dumbledore success', () => {
    cy.get('[ng-click ="customer()"]').click();
    cy.url().should(
      'eq',
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer'
    );
    cy.get('[name="userSelect"]').select('Albus Dumbledore');
    cy.get('[name="myForm"]').submit();
    // check selected name appear in page
    cy.get('strong').find('span').should('contain', 'Albus Dumbledore');
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('5000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('5000');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('2000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('3000');
    //check transaction
    cy.get('[ng-click="transactions()"]').click();
    // logout
    cy.get('.logout').click();
  });

  it('Ensure login customer account as Neville Longbottom success', () => {
    cy.get('[ng-click ="customer()"]').click();
    cy.url().should(
      'eq',
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer'
    );
    cy.get('[name="userSelect"]').select('Neville Longbottom');
    cy.get('[name="myForm"]').submit();
    // check selected name appear in page
    cy.get('strong').find('span').should('contain', 'Neville Longbottom');
    cy.get('[ng-click="deposit()"]').click();
    cy.get('[ng-submit="deposit()"]').find('input').type('5000');
    cy.get('[ng-submit="deposit()"]').submit();
    //  show Deposit Successful message
    cy.get('[ng-show="message"]').should('have.text', 'Deposit Successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('5000');
    cy.get('[ng-click="withdrawl()"]').click();
    cy.get('[ng-submit="withdrawl()"]').find('input').type('2000');
    cy.get('[ng-submit="withdrawl()"]').submit();
    cy.get('[ng-show="message"]').should('have.text', 'Transaction successful');
    cy.get('[ng-hide="noAccount"]').find('.ng-binding').contains('3000');
    //check transaction
    cy.get('[ng-click="transactions()"]').click();
    // logout
    cy.get('.logout').click();
  });
});
