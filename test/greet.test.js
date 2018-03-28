describe('greet function' , function(){
    it('should return a greeting message' , function(){

      var name = 'Inam';
        assert.equal(greet(name),'Hello, Inam');
        assert.typeOf("Inam", 'string', 'Inam is a string');
        assert.lengthOf("Inam", 4, 'Inam`s value has a length of 4');

    });
    it('should return a greeting message' , function(){
      var name = 'Pumlani';
        assert.equal(greet(name),'Hello, Pumlani');
          assert.typeOf("Pumlan", 'string');

    });
});
