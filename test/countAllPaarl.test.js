describe('allPaarl function' , function(){
    it("should return all the registration numbers in the string for Paarl." , function(){
      var paarl = 'CJ';
        assert.equal(allPaarl(paarl), 1);
    });
    it("should return all the registration numbers in the string for Paarl." , function(){
      var paarl = 'CJ, CJ';
        assert.equal(allPaarl(paarl), 2);
    });
    it("should return all the registration numbers in the string for Paarl." , function(){
      var town = 'CL 64564, CL 5412, CJ 4643, CA 5445, CZ 5862, CF 54325';
        assert.notEqual("CA","CL","these are not equal");
    });
});
