describe("this is a free test", ()=>(
    it("will ensure the app actually opens cypress", ()=>{
        cy.visit("/")
        cy.get("h1").should("have.text", "Rick and Morty")
        cy.get("nav").should("exist")
    })
))
