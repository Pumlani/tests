describe('countRegNumber function' , function(){
    it('should return three registration numbers.' , function(){
     //var RegNumber = ('CA 182736,CY 523519,CJ 812328');
      assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'),3);

    });

    it('should return an error.' , function(){
     //var RegNumber = ('CA 182736,CY 523519,CJ 812328');
      assert.notEqual(countRegNumber('CA 182736,CY 523519,CJ 812328'),0);

    });


});
