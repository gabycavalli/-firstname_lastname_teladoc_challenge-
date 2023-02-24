describe('Automation Challenge', function () {
    // test case
    it('Scenario 1', function (){
       //URL launch
       cy.visit("https://www.way2automation.com/angularjs-protractor/webtables/")
       // identify first column
       cy.get('body > table > tbody').each(($elm, index, $list)=> {
          // text captured from column1
          const t = $elm.text();
          // matching criteria
          if (t.includes('Sales')){
             // next sibling captured
             cy.get('tbody > :nth-child(3) > :nth-child(11)')
             .eq(index).next().then(function(d) {
                // text of following sibling
                const r = d.text()
                //assertion
                expect(r).to.contains('Sales');
             })
          }
       })
    });
 });