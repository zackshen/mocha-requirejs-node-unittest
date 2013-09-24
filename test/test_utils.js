var assert = require("assert")

requirejs(['src/utils'], function(Util) {

    /*
    describe('Array', function(){
        describe('#indexOf()', function(){
            it('should return -1 when the value is not present', function(){
                assert.equal(-1, [1,2,3].indexOf(5));
                assert.equal(-1, [1,2,3].indexOf(1));
            })
        })
    })
    */

    describe('Util', function(){
        describe('number bigger', function(){
            it('1 is bigger than 0', function(){
                assert.equal(Util.isBiggerThan(1, 0), true)
                assert.equal(Util.isBiggerThan(1, -1), true)
                assert.equal(Util.isBiggerThan(-1, -2), true)
                assert.equal(Util.isBiggerThan(-2, -1), true)
            })
        })
    })

});
