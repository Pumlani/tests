describe('yearsAgo function' , function(){
    it('should return how many years ago.' , function(){
      var num = '5'
        assert.equal(yearsAgo(num), 2013);

    });
    it('should return how many years ago.' , function(){
      var num = '6'
        assert.equal(yearsAgo(num), 2012);

    });
    it('should return how many years ago.' , function(){
      var num = '6'
        assert.notEqual(yearsAgo(num), 2015);

    });
});
