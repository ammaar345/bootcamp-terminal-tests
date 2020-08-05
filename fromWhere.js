module.exports=function fromWhere (regNumber){
    var place;
      if (regNumber==="CY")
      {return place="Bellville"
      }
      if (regNumber==='CJ'){
      return place="Paarl"}
      if (regNumber==="CA"){
      return place="Cape Town"}
      else {return place="Some other place!"}
  }