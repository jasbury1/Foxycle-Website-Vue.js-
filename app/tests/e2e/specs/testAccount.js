describe("tests account functionality", () => {
    it("User can see account summary", () => {
        cy.visit("localhost:8080/login");
        cy.get("[id='validationCustom01']").type('jdoe');
        cy.get("[id='validationCustom02']").type('password');
        cy.get("[id='loginB']").click();
        cy.contains("Account").trigger("mouseover");
        cy.contains("Account summary").click({force:true});
        cy.contains("h1", "My Account");
    });
    it("User can see the different options on the account page and edit", ()=>{
        cy.contains('button', "Edit First Name").click();
        cy.get("[placeholder='New First Name']").type("Teem");
        cy.get("[placeholder='Confirm New First Name").type("Teem");
        cy.contains('button', "Save changes").click();
        cy.contains("Teem");
        cy.contains('button', "Edit Last Name").click();
        cy.get("[placeholder='New Last Name']").type("Sicks");
        cy.get("[placeholder='Confirm New Last Name").type("Sicks");
        cy.contains('button', "Save changes").click();
        cy.contains("Sicks");
        cy.contains('button', "Edit Username").click();
        cy.get("[placeholder='New Username']").type("TeemSicks");
        cy.get("[placeholder='Confirm New Username").type("TeemSicks");
        cy.contains('button', "Save changes").click();
        cy.contains("TeemSicks");
        cy.contains('button', "Edit Password").click();
        cy.get("[placeholder='New Password']").type("pineapple");
        cy.get("[placeholder='Confirm New Password").type("pineapple");
        cy.contains('button', "Save changes").click();
        cy.contains("*********");
        cy.contains('button', "Edit Phone Number").click();
        cy.get("[placeholder='New Phone Number']").type("987654321");
        cy.get("[placeholder='Confirm New Phone Number").type("987654321");
        cy.contains('button', "Save changes").click();
        cy.contains("987654321");
        cy.contains('button', "Edit Email").click();
        cy.get("[placeholder='New Email']").type("teemSicks@github.com");
        cy.get("[placeholder='Confirm New Email").type("teemSicks@github.com");
        cy.contains('button', "Save changes").click();
        cy.contains("teemSicks@github.com");
        cy.contains("Edit Username").click();
        cy.get("[placeholder='New Username']").type("jdoe");
        cy.get("[placeholder='Confirm New Username").type("jdoe");
        cy.contains('button', "Save changes").click();
        cy.contains('jdoe');
        cy.contains('button', "Edit Password").click();
        cy.get("[placeholder='New Password']").type("password");
        cy.get("[placeholder='Confirm New Password").type("password");
        cy.contains('button', "Save changes").click();
        cy.contains("********");
    });
    it("Users can log out", () => {
        cy.contains("Logout").click({force:true});
        cy.location("pathname").should("eq", "/");
        cy.contains("Login");
    });
});
