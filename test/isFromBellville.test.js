let assert=require("assert");
let isFromBellville=require("../isFromBellville");
 describe("Indicates whether the number plate is from bellville or not.", function() {
  
  it("Registration plate starting with CY should return true", function() {
     
      assert.equal( true,isFromBellville("CY"));
   });
 it("Registration plate starting with CJ should return false",function()
 {
   assert.equal(false,isFromBellville("CJ"))
 })
 it("Registration plate starting with CK should return false",function()
 {
   assert.equal(false,isFromBellville("CK"))
 })
  })