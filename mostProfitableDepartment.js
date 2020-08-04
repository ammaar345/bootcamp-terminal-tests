module.exports=function mostProfitableDepartment(salesData){
    console.log(salesData.length)
      //console.log(salesData);
    // var total=0;
      var objMostProfit={};
      for (var i=0;i<salesData.length;i++){
     var index = salesData[i].department;
      
        if (objMostProfit[index]=== undefined) {
           objMostProfit[index]= 0;
        } objMostProfit[index]+=salesData[i].sales
     }var highest = 0;
       var dep = ''  
      for (var amt in objMostProfit )
      {
      
       if (objMostProfit[amt] > highest){
        highest = objMostProfit[amt];     
        dep = amt;
       }
      }
      return dep
      
    }