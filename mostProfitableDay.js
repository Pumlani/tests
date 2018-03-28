function mostProfitableDay(salesData){

  //how do I find the biggest thing in a listOfPeople

  // create and empty variable for the oldest person

  var mostProfitable = {
    day : "",
    sales : 0
  };

  // loop over the listOfPeople
  for (var i = 0; i < salesData.length; i++) {
    var currentDapartment = salesData[i];

    if (currentDapartment.sales > mostProfitable.sales){
        mostProfitable = currentDapartment;
    }
  }

  return mostProfitable.day;
}
