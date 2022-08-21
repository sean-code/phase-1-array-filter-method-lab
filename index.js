// Code your solution here
const drivers = ['Tony', 'Hemsworth', 'Gallows', 'Epps', 'Kevin', 'Latimore']
//return drivers passed in array

//find the matching using arrow function
const findMatching = (p,q) => p.filter(p => p.toLowerCase() === q.toLowerCase())

//matchName
const matchName = (p,q) => p.filter(p => p.name === q)
//fuzzyMatch
const fuzzyMatch = (p,q) => p.filter(p => p.charAt(0) === q.charAt(0))