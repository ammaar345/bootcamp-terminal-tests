module.exports=function yearsAgo(year){ //1976
    var date=new Date(); 
    
    var yearAgo=date.getFullYear()-year; //2020
    return yearAgo;
  //console.log(year);
  
  }