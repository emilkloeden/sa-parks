const {expect} = require('chai')
const parks = require('../src/index')

describe('SA Parks', function() {
    describe('.all', function() {
        
        it('should return an array', function() {
            const allParks = parks.all
            expect(allParks).to.be.an.instanceOf(Array)//.isArray(allParks)
        })
        
        it('should return a list of objects with a name property', function() {
            const allParks = parks.all
            expect(allParks).to.satisfy(everyObjectHasAName)

            function everyObjectHasAName(array) {
                return array.every(obj =>  {
                    return expect(obj).to.haveOwnProperty('name')
                })
            }
        })
        
        it('should return a list of objects with a description property', function() {
            const allParks = parks.all
            expect(allParks).to.satisfy(everyObjectHasADescription)

            function everyObjectHasADescription(array) {
                return array.every(obj => {
                    return expect(obj).to.haveOwnProperty('description')
                })
            }
        })
    })

    describe('.names', function() {
        
        it('should return a list', function() {
            expect(parks.names).to.be.an.instanceOf(Array)
        })
        
        it('should contain only strings', function() {
            expect(parks.names).to.satisfy(everyItemIsAString)
            
            function everyItemIsAString(array) {
                return array.every(item => {
                    return typeof item === 'string'
                })
            }
        })
        
        it('should always contain Morialta', function() {
            expect(parks.names).to.include("Morialta Conservation Park")
        })
    })

    describe('.random()', function() {
        
        it('should return a single object', function() {
            const randomPark = parks.random()
            expect(randomPark).to.not.be.an.instanceOf(Array)
        })
        
        it('should contain a name property', function() {
            const randomPark = parks.random()
            expect(randomPark).to.haveOwnProperty('name')
        })
        
        it('should contain a description property', function() {
            const randomPark = parks.random()
            expect(randomPark).to.haveOwnProperty('description')
        })
    })
})