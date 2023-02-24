describe("test2", () => {

    it("Test v2  - Delete elements", function () {

        cy.visit("https://www.way2automation.com/angularjs-protractor/webtables/")
        cy.get("body > table > tbody")
            .each(($e1, index, $list) => { //iterating through array of elements
                const StoreText = $e1.text();      //storing iterated element
                if (StoreText.includes("sales")) {
                    //If text found,iteration stops
                    cy.get("td:nth-child(10)")          //gets the CSS of second column
    
                        .eq(index)                    //grabs the content in index value
    
                        .then(function (Taskcolumn) {
    
                            const Tasktext = Taskcolumn.text();
    
                            expect(Tasktext).to.equal("Edit");
                            //assertion to verify text
                            // Do something with this specific element...
                        })
                }
            })
    



    })
    




})

