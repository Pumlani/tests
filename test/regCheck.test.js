describe('regCheck fuction' , function(){
    it('should tell which province the registration is from.' , function(){
      var num1 = 'HBC 4446 MP';
      var num2 = 'MP'
        assert.equal(regCheck(num1, num2), true);
  });
  it('should tell which province the registration is from.' , function(){
    var num1 = 'HBC 4446 ND';
    var num2 = 'ND'
      assert.equal(regCheck(num1, num2), true);
});
it('should tell which province the registration is from.' , function(){

    assert.notEqual('HBC 4446 ND','HBC 4446 MP', "these are not equal");
});
});
