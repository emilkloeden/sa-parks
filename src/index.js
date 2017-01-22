const parks = require('./parks.json')
const uniqueRandomArray = require('unique-random-array')

const all = parks

const names = all.map(park => park.name)

const random = uniqueRandomArray(all)

module.exports = {
    all,
    names,
    random
}