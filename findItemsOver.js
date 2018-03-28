function findItemsOver(listOfItems, threshold){
 var List=[];

  for (var i = 0; i < listOfItems.length; i++) {
    var item = listOfItems[i];
    // check if the current person is the older than the person in the oldest person variable

    // if this is the oldest person
    //store that person in the oldest person variable
    if (item.qty > 20){
        List.push(item);}
  }

  return List;
}
