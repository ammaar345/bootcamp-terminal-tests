let assert=require("assert");
let isWeekday=require("../isWeekday")
describe("Returns true if the day is a weekday.", function() {
  
  
    it("Should return false for Saturday",function(){ 
       var day="Saturday";
        assert.equal(isWeekday(day),false);
        
    });
    it("Should return true for Monday",function(){ 
        var day="Monday";
    assert.equal(isWeekday(day),true);
});


});