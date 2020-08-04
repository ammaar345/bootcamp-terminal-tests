module.exports=function totalPhoneBill(callSms){
   const callBill=2.75;
     const smsBill=0.65;
   var icountCalls=0;
     var icountSms=0;
     var arrCellular=callSms.split(",")
    for (var i=0;i<arrCellular.length;i++){
    if (arrCellular[i].trim().startsWith('s')){
      icountSms++;
    }
    else {
      icountCalls++;
    
    }
    }var cost=(icountSms*smsBill)+(icountCalls*callBill)
     return "R"+cost.toFixed(2)
    
   }