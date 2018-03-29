describe('greet function' , function(){

    it('should greet a person.' , function(){
      var name = 'Pumlani';
        assert.equal(greet(name),'Hello, Pumlani');


    });
    it('should return string variables.' , function(){
      assert.typeOf(name, 'string', 'name is a string');

    });
    it("should return an error if it's not a string." , function(){
      assert.notEqual(3, "4", 'these numbers are not equal');

    });
});
