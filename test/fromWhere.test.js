describe('fromWhere function' , function(){
    it('should returns the town the car is from.' , function(){
        assert.equal(fromWhere("CA"), "Cape Town");
      });
      it('should returns the town the car is from.' , function(){
          assert.equal(fromWhere("CY"), "Bellville");
        });
        it('should returns the town the car is from.' , function(){
            assert.notEqual(fromWhere("C A"), "Cape Town");
          });
});
