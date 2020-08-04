module.exports=function countAllFromTown(string,loc)

{var emptyArray=[];
  
  var plates=string.split(",")
  console.log(plates);
for (var i=0;i<plates.length;i++){
var platesPaarl=plates[i].trim()
if (platesPaarl.startsWith(loc)){
  emptyArray.push(platesPaarl);
}
//return emptyArray.length
 
  //console.log(emptyArray.length)
}console.log(emptyArray.length)
 return emptyArray.length
//console.log(plates)
}