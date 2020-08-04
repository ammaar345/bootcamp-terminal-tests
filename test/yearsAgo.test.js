let assert=require("assert");
let yearsAgo=require("../yearsAgo")
describe("Calculate how many years ago from todays date to the given date.", function() {
  
  
    it("Should return the amount of years as 44",function(){ 
       var year=1976;
        assert.equal(yearsAgo(year),44);
        
    });

    it("Should return the amount of years as 34",function(){ 
        var year=1986;
         assert.equal(yearsAgo(year),34);
         
     });  
       it("Should return the amount of years as 99",function(){ 
        var year=1921;
         assert.equal(yearsAgo(year),99);
         
     });
});