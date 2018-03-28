describe("findItemsOver function", function(){
  let data =[
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];

let result = [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}];

  it("should return products that have quantity higher than the threshold", function(){
    assert.deepEqual(findItemsOver(data, 25),result );
});

it("should return products that have quantity higher than the threshold", function(){
  assert.notEqual(20,25,"these are not equal");
});

});
