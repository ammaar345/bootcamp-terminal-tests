module.exports=function findItemsOver(qtyName,threshold)
{var arrHighQty=[];
  //console.log(qtyName)
  // console.log(threshold) 
 //console.log(qtyName.length)
for (var i=0;i<qtyName.length;i++){
var index=qtyName[i];
if (index.qty>threshold){
//console.log(index)
  
  arrHighQty.push(index)
}
  //console.log(index.qty)
//if (index.qty)
} return arrHighQty
//console.log(arrHighQty)
}