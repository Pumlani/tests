function countAllFromTown(regist){
console.log(regist);
  var allReg=regist.split(", ");
  var CountTown=[];
   //var counter = 0;

  for(var i=0; i<allReg.length; i++){
  if(allReg[i].startsWith("CL")){
  CountTown.push(allReg[i])
  }
  }
  return CountTown.length;
}
