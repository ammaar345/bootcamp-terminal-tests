let assert=require("assert");
let transportFee=require("../transportFee")
describe("Calculates the transportfee according to work shift.", function() {
  
  
    it("Should return the transport cost for the morning",function(){ 
        var shift="morning";
        assert.deepEqual(transportFee(shift), "R20");
    });
    it("Should return the transport cost for the afternoon",function(){ 
        var shift="afternoon";
    
    assert.deepEqual(transportFee(shift),"R10");
});
it("Should return the transport cost for the night",function(){ 
    var shift="nightshift";

assert.deepEqual(transportFee(shift),"free");
});

});