let assert=require("assert");
let totalPhoneBill=require("../totalPhoneBill");
describe("Calculates the total phone bill accordingly.", function() {
  
  
    it("Should return the total phone bill for 2 calls and 3 sms's",function(){ 
        var callSms="call, sms, call, sms, sms";
        assert.equal(totalPhoneBill(callSms), "R"+7.45);
    });
    it("Should return the Total phone bill for 1 call and 1 SMS",function(){ 
        var callSms="call, sms";
    
    assert.equal(totalPhoneBill(callSms),"R"+3.4.toFixed(2));
});
it("Should return the total phone bill for 2 sms's",function(){ 
    var callSms="sms, sms";

assert.equal(totalPhoneBill(callSms),"R"+1.3.toFixed(2));
});

});