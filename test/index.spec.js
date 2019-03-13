import {expect} from 'Chai';
import test from '../app/index'


describe('index test', function () {
    it('should return test', function () {
        let response = test.test()

        expect(response).to.be.equal('test')
    })
})
