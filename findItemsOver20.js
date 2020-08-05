module.exports=function findItemsOver20(objItems){
      var arrMoreThan20=[];
      for (var i=0; i<objItems.length; i++){
        if (objItems[i].qty>20){
       arrMoreThan20.push(objItems[i]);
        }
       
      }
         return arrMoreThan20
    }