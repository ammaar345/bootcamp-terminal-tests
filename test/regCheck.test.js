let assert=require("assert");
let regCheck=require("../regCheck")
 describe("Checks if the given location matches the plate registration given.", function() {
  
  
   it("Should return true if location registration matches the end of the number plate",function()
   {var location="GP"
   var plate="DC 55 YU GP"
     assert.equal(true,regCheck(plate,location))
   })

   it("Should return false if the location registration doesnt match the end of the number plate",function()
   {var location="EC"
   var plate="DC 55 YU GP"
     assert.equal(false,regCheck(plate,location))
   })
   it("Should return true if location registration matches the end of the number plate",function()
   {var location="L"
   var plate="5566 L"
     assert.equal(true,regCheck(plate,location))
   })

 
   
    })