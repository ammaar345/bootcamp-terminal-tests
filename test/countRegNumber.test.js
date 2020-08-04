let assert=require('assert');
let countRegNumber=require("../countRegNumber");
describe("Calculates total of registration numbers present.", function() {
  
  
    it("Should count 2 number plates in total",function(){ 
        var regCount = countRegNumber('CA 182736,CY 523519');
    assert.equal(regCount, 2);
    });
   
    it("Should count 3 number plates in total",function(){ 
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
    assert.equal(regCount, 3);
    });  
    it("Should count 4 number plates in total",function(){ 
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328,CL 123456');
    assert.equal(regCount, 4);
    });
 
});