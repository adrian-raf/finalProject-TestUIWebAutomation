describe('login test as bank manager', () => {
  beforeEach(() => {
    cy.visit(
      'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager'
    );
  });

  it('Ensure Manager Page should have 3 button: Add Customer, Login Account, Customers', () => {
    cy.get('.center > button').should(($button) => {
      expect($button).to.have.length(3);
      expect($button.eq(0)).to.contain('Add Customer');
      expect($button.eq(1)).to.contain('Open Account');
      expect($button.eq(2)).to.contain('Customers');
    });
  });

  it('Ensure form in "Add Customer" can be filed and submit', () => {
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]')
      .type('Adrian')
      .get('[ng-model="lName"]')
      .type('Rafly')
      .get('[ng-model="postCd"]')
      .type('1000')
      .get('button.btn.btn-default')
      .click();
    // alert notification displayed
    cy.on('window:alert', (txt) => {
      //Assertion
      expect(txt).to.contains(
        'Customer added successfully with customer id :6'
      );
    });
    // cy.get('[ng-click="openAccount()"]').click();
    // cy.get('[name="userSelect"]').select('Adrian Rafly');
    // cy.get('[name="currency"]').select('Dollar');
    // cy.get('button').contains('Process').click();
    // cy.on('window:alert', (txt) => {
    //   //Assertion
    //   expect(txt).to.contains(
    //     'Account created successfully with account Number :1016'
    //   );
    // });
  });

  it('Ensure a new account recently add, can be selected in "Open Account"', () => {
    // repeat previous step
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]')
      .type('Adrian')
      .get('[ng-model="lName"]')
      .type('Rafly')
      .get('[ng-model="postCd"]')
      .type('1000')
      .get('button.btn.btn-default')
      .click();
    // click "Open Account" button
    cy.get('[ng-click="openAccount()"]').click();
    cy.get('[name="userSelect"]').select('Adrian Rafly');
    cy.get('[name="currency"]').select('Dollar');
    cy.get('button').contains('Process').click();
    // alert notification displayed
    cy.on('window:alert', (txt) => {
      //Assertion
      expect(txt).to.contains(
        'Account created successfully with account Number :1016'
      );
    });
    // Ensure Adrian name will be displayed in Customers Table when searched in "Search Customer"
    cy.get('[ng-click="showCust()"]').click();
    cy.get('[ng-model="searchCustomer"]').type('Adrian').should('be.visible');
  });

  it('Ensure account name Adrian Rafly visible and can be removed ', () => {
    // repeat previous step
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]')
      .type('Adrian')
      .get('[ng-model="lName"]')
      .type('Rafly')
      .get('[ng-model="postCd"]')
      .type('1000')
      .get('button.btn.btn-default')
      .click();

    // click "Customer" button
    cy.get('[ng-click="showCust()"]').click();
    cy.contains('td.ng-binding', 'Adrian').should('be.visible');
    // Delete account with the name Adrian
    cy.get('tbody > tr[class=ng-scope]').eq(5).contains('Delete').click();

    // Ensure tr just have 5 data after delete account with the name Adrian
    cy.get('tbody > tr[class=ng-scope]').should('have.length', 5);
  });

  it('Ensure a new account can login as customer ', () => {
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]')
      .type('Adrian')
      .get('[ng-model="lName"]')
      .type('Rafly')
      .get('[ng-model="postCd"]')
      .type('1000')
      .get('button.btn.btn-default')
      .click();
    // click back button
    cy.get('[ng-click="home()"]').click();
    // customer login
    cy.get('[ng-click="customer()"]').click();
    cy.get('[name="userSelect"]').select('Adrian Rafly');
    cy.get('[name="myForm"]').submit();
    // check selected name appear in page
    cy.get('strong').find('span').should('contain', 'Adrian Rafly');
  });

  it('Ensure the name cant be duplicate', () => {
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]')
      .type('Adrian')
      .get('[ng-model="lName"]')
      .type('Rafly')
      .get('[ng-model="postCd"]')
      .type('1000')
      .get('button.btn.btn-default')
      .click();
    // repeat previous step
    cy.get('[ng-click="addCust()"]').click();
    cy.get('[ng-model="fName"]')
      .clear()
      .type('Adrian')
      .get('[ng-model="lName"]')
      .clear()
      .type('Rafly')
      .get('[ng-model="postCd"]')
      .clear()
      .type('1000')
      .get('button.btn.btn-default')
      .click();
    // alert notification displayed
    cy.on('window:alert', (txt) => {
      //Assertion
      expect(txt).to.contains(
        'Please check the details. Customer may be duplicate.'
      );
    });
  });
});
