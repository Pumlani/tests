describe('transportFee fuction' , function(){
    it('should print out transport fee of the shift.' , function(){
    //var fee="R20";
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should print out transport fee of the shift.' , function(){
    //var fee="R20";
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should print out transport fee of the shift.' , function(){
    //var fee="R20";
        assert.equal(transportFee('niftshift'), 'free');
    });
});
