describe("NavBar.jsx Component", () => {
    it("Will ensure a nav and navbar-brand exist", () => {
        cy.visit("/")
        cy.get("nav").should("exist")
        cy.get("navbar-brand").should("exist")
        cy.get("navbar-brand").should("have.text", "Rick and Morty")
    });
});

describe("NavBar.jsx Component", ()=>{
    it("contains links to pages and links are functinal",
    ()=>{
        cy.visit("/")
        cy.get(".nav-link").eq(1).should("have.text", 
        "About").should("have.attr", "href", "/about/")
    });
});