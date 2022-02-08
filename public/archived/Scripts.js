// import React from 'react';

// const items = [
// 	{name: 'Bike', price: 125},
// 	{name: 'Car', price: 25},
// 	{name: 'House', price: 1125},
// 	{name: 'Boat', price: 5},
// 	{name: 'Skateboard', price: 2},
// 	{name: 'Desk', price: 1250}
// ]

// const filterItems = items.filter((item) => {
// return item.price >= 100
//   })

// console.log(filterItems)

// export default function Scripts() {
// 	return <div></div>;
// }

// const number = 50
// let results

// if (number >= 50){
// result = "No to fifty"
// } else {
// 	result = "Pfffft"
// }

// results =  number >=  50 ? "No to fifty": "Pfffft"

// console.log(results)

// const alphabets = ["A", "B", "C", "D", "E", "F"]
// const numbers = [1, 2, 3, 4, 5, 6]

// const [a,b,c,...rest] = alphabets

// const newArray = [...alphabets, ...numbers]

// console.log(newArray)

function sumAndMultipy (a,b) {
	return [a +b , a * b]
}

const array = sumAndMultipy(2,3)
console.log(array)

const [sum, multiply] = sumAndMultipy(2,3)
console.log(sum)
console.log(multiply)

// Object destructuring

const personOne = {
firstname: "Fluffy",
age: 69,
address: {
	city: "gooflipsville",
	state: "noIdea"
}
}

const personTwo = {
	age: 72,
	favouriteFood: "pizza",
	}

	// const {firstname, address: {city}} = personTwo

	const personThree = {...personOne, ...personTwo}

	console.log(personThree)

	function printUser ({firstname, age, favouriteFood}){
		console.log(`Name is: ${firstname}. Age is ${age}. I LOVE ${favouriteFood}`)
	}

	printUser(personTwo)
