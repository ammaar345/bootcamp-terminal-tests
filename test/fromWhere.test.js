let assert=require("assert");
let fromWhere=require("../fromWhere")
describe("Shows where the owner of the number plate is from.", function() {
  
  
    it("Plate registration CY should return Bellville"  ,function(){ 
        var regNumber="CY";
        assert.equal(fromWhere(regNumber), "Bellville");
    });
    it("Plate registration CJ should return Paarl  ",function(){ 
        var regNumber="CJ";
    
    assert.equal(fromWhere(regNumber),"Paarl");
});
it("Plate registration CA should return Cape Town",function(){ 
    var regNumber="CA";

assert.equal(fromWhere(regNumber),"Cape Town");
});

it("Should return Some other place!",function(){ 
    var regNumber="CC";

assert.equal(fromWhere(regNumber),"Some other place!");
});
});