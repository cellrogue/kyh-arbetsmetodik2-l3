import _ from 'lodash'

const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = _.map(numbers, num => num * 2)
// const doubledNumbers = numbers.map(num => num * 2)
const a = _.map(numbers, num => num * 10)

// console.log(doubledNumbers)
// console.log(a)

const birthYear = [1975, 1997, 2002, 2001, 1987, 1971, 1970]
// const ages = _.map(birthYear, year => 2023 - year)

const driverLicense = _.map(birthYear, year => year + 18)

console.log(driverLicense)

// console.log(ages)