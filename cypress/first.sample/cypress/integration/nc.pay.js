Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe('My First Test', function () {
    it('Does not do much!', function () {
        // cy.server();
        // cy.route('POST', '**/payments/*').as('payment');
        cy.visit('https://secure.sandbox.namecheap.com/ncadmin');
        cy.setCookie('x-ncpl-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhcnR5b20udiIsIm5jL2dycyI6Im5jQWRtaW4iLCJuYy9ybHMiOiJuY0FkbWluIiwibmMvY2xpIjoibmNBZG1pbiIsIm5jL3NpZCI6IjljMTFhNGMxLWJjZTYtNDZiYy1iMGYyLTdiNmU0MzcyMWNmNiIsIm5jL3NsZCI6IjEiLCJuYy9pcCI6IjE5My4xMTEuNjMuMjUyIiwibmMvdWFoIjoicFU2NE1KRHRtRU15OU95aUxUN0Y1QT09IiwibmMvZG9tIjoic2VjdXJlLnNhbmRib3gubmFtZWNoZWFwLmNvbSIsIm5jL2Zjc3JmIjoiMSIsIm5jL3ZjIjoiIiwibmJmIjoxNTMyNTExMzM1LCJleHAiOjE1MzI1MTI1MzUsImlhdCI6MTUzMjUxMTMzNSwiaXNzIjoiaHR0cDovL25hbWVjaGVhcC5jb20iLCJhdWQiOiIqIn0.nz0G1bWWg7TTSV2psYjm8zX7Kq41v7snFE9rps2tKLo');
        cy.visit('https://secure.sandbox.namecheap.com/payments/payments');
        const res = cy.get('[data-e2e-id=payments-list-table] tbody tr', { timeout: 20000, log: true }).then($selectedElement=>{
          debugger
        });
        // cy.wait('@payment');
        cy.get('[data-e2e-id=payments-list-filter-section-payment-id-field] input').type('935793e5-6a30-4be4-9399-7a47d043825b');
        cy.get('[data-e2e-id=payments-list-filter-section-search-button]').click();
        // cy.get('[data-e2e-id=payments-list-table] tbody tr').;
        // console.log(res);
        // expect(cy.get('[data-e2e-id=payments-list-table] tbody tr', { log:true }).length).equal(1);
        // expect(cy.get('[data-e2e-id=payments-list-table] tbody tr')[0].get(tr)[0].text).equal('935793e5-6a30-4be4-9399-7a47d043825b');
        // cy.debug(res);
    })
});
