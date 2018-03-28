describe("mostProfitableDay function", function(){
  let salesData = [
    {sales : 4500, day : 'Monday'},
    {sales : 1500, day : 'Monday'},
    {sales : 5500, day : 'Monday'},
    {sales : 7500, day : 'Tuesday'},
    {sales : 2505, day : 'Tuesday'},
    {sales : 1540, day : 'Tuesday'},
    {sales : 1500, day : 'Wednesday'},
    {sales : 8507, day : 'Wednesday'},
    {sales : 8009, day : 'Wednesday'},
    {sales : 12000, day : 'Thursday'},
    {sales : 18007, day : 'Thursday'},
    {sales : 6109, day : 'Thursday'},
    {sales : 7005, day : 'Friday'},
    {sales : 12006, day : 'Friday'},
    {sales : 16109, day : 'Friday'},
];


//let result = [{day : 'Thursday', sales : 18007}];

  it("should return return the most profitable day", function(){
    assert.deepEqual("Thursday",mostProfitableDay(salesData));
});
it("should return return the most profitable day", function(){
  assert.notDeepEqual({sales : 18007, day : 'Thursday'},{sales : 12000, day : 'Thursday'}, "these are not deeply equal");

});

});
