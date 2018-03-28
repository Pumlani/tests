describe('isWeekday function' , function(){
    it("should print out it's week day." , function(){
      var day = 'Monday';
        assert.equal(isWeekday(day), true);
    });
    it("should print out it's week day." , function(){
      var day = 'Thursday';
        assert.equal(isWeekday(day), true);
    });
    it("should print out it's week day." , function(){
      var day = 'Saturday';
        assert.equal(isWeekday(day), false);
    });
});
