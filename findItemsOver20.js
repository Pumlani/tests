function findItemsOver20(listOfItems, threshold){
 var printList=[];

  for (var i = 0; i < listOfItems.length; i++) {
    var current = listOfItems[i];
    // check if the current person is the older than the person in the oldest person variable

    // if this is the oldest person
    //store that person in the oldest person variable
    if (current.qty > 20){
        printList.push(current);}
  }

  return printList;
}
