let assert=require("assert");
let countAllPaarl=require("../countAllPaarl")
describe("Counts all number plates which are from Paarl.", function() {
  
  
    it("Should count 3 Paarl number plates for number plates starting with CJ ",function(){ 
       var string="CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
        assert.equal(countAllPaarl(string),3);
        
    });
  
    it("Should count 4 Paarl number plates for number plates starting with CJ",function(){ 
        var string="CJ 345 123, CJ 2345, CJ 123-546, CK 345, CJ 123";
         assert.equal(countAllPaarl(string),4);
         
     });
  
     it("Should count 1 Paarl number plates for number plates starting with CJ",function(){ 
        var string="CJ 345 123, CK 2345, CL 123-546, CK 345, CK 123";
         assert.equal(countAllPaarl(string),1);
         
     });
    
});