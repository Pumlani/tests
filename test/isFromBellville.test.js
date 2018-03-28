describe('isFromBellville function' , function(){
    it("should return it's from Bellville." , function(){
     var name =  "CY";
        assert.equal(isFromBellville(name), true);

    });
    it("should return it's from Bellville." , function(){
     var name =  "CA";
        assert.equal(isFromBellville(name), false);

    });
    it("should return it's from Bellville." , function(){
     var name =  "C Y";
        assert.notEqual(isFromBellville(name), true);

    });
});
