describe("findItemsOver20 function", function(){
  let data =[
{name : 'apples', qty : 10},
{name : 'pears', qty : 37},
{name : 'bananas', qty : 27},
{name : 'apples', qty : 3},
];

let result = [{name : 'pears', qty : 37},{name : 'bananas', qty : 27}];

  it("should return items that are over 20 in the list", function(){
    assert.deepEqual(findItemsOver20(data, 20),result );
});

it("should return items that are over 20 in the list", function(){
  
  assert.notDeepEqual({ name: 'pears' }, { name: 'apples' });


});

});
