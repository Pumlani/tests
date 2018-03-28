describe('isWeekday function' , function(){
    it('should print out it"s week day' , function(){
     var day = 'Monday';
      assert.equal(isWeekday('day'), true);

    });
    it('should prints out it"s week day' , function(){
     var day = 'Sunday';
      assert.notEqual(isWeekday('day'), false);

    });
    it('should prints out it"s week day' , function(){
    assert.notDeepEqual({ day: 'Saturday' }, { day: 'Monday' });
  });

});
