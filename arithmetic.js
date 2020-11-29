function Arithmetic(){

	const [lambda, delta, sigma] = Array.from({length:3}, (_, k)=>k)
	console.log(lambda)
	let checkAP = (...sequence) => {
		var difference = []
		var state = false
		for (i = lambda; i < sequence.length-delta; i++)
			difference.push(sequence[i+delta] - sequence[i])
		for (k = lambda; k < difference.length-delta; k++)
			state = difference[k] === difference[k+delta]

		return {state, difference, a: sequence[lambda]}
	}

	this.isArithmeticProgression = function(...sequence){
		let status = checkAP(...sequence)
		let [message, condition] = ["mutating", " not "]
		if (status.state){
			message = status.difference[lambda]
			condition = " "
		}
		return `The given sequence is${condition}an Arithmetic Progression because the common difference is ${message}.`
	}

	this.createAP = function(firstTerm=lambda, difference=delta, number=delta){
		let apArray = [firstTerm]
		for (i = delta; i < number; i++){
			apArray.push(firstTerm+=difference)
		}
		return apArray
	}

	this.getTerm = function(firstTerm=lambda, difference=delta, number=delta){
		let term = firstTerm + ((number-delta)*difference)		
		return `Term ${number} of the given Arithmetic Progression: ${term}`
	}

	this.getSum = function(firstTerm=lambda, difference=delta, number=delta){
		let sum = (number/sigma)*(sigma*firstTerm + (number-delta)*difference)	
		return `Sum of the terms of the given Arithmetic Progression: ${sum}`
	}

	this.getTermbyArray = function(sequence=lambda, number=delta){
		let status = checkAP(...sequence)
		if (status.state)
			term = status.a + ((number-delta)*status.difference[lambda])
			return `Term ${number} of the given Arithmetic Progression: ${term}`
		return `The given sequence is not an Arithmetic Progression.`	
	}

	this.getSumbyArray = function(sequence=lambda, number=delta){
		let status = checkAP(...sequence)
		if (status.state)
			sum = ((number/sigma)*(sigma*status.a + (number-delta)*status.difference[lambda]))
			return `Sum of the terms of the given Arithmetic Progression: ${sum}`
		return `The given sequence is not an Arithmetic Progression.`	
	}

	this.getFirstTerm = function(difference=delta, number=delta, term=delta){
		let a = term - ((number-delta)*difference)		
		return `First term of the given Arithmetic Progression: ${a}`
	}

	this.getFirstTermBySum = function(difference=delta, number=delta, sum=delta){
		let a = ((sum/(number/sigma))-((number-delta)*difference))/2
		return `First term of the given Arithmetic Progression: ${a}`
	}

	this.getDifference = function(firstTerm=lambda, number=delta, term=delta){
		let d = (term - firstTerm)/(number-delta)
		return `Common difference of the given Arithmetic Progression: ${d}`
	}

	this.getDifferenceBySum = function(firstTerm=lambda, number=delta, sum=delta){
		let d = (sum/(number/sigma)-sigma*firstTerm)/(number-delta)
		return `Common difference of the given Arithmetic Progression: ${d}`
	}

	this.getNumber = function(firstTerm=lambda, difference=delta, term=delta){
		n = ((term - firstTerm) / difference) + delta
		return `Common difference of the given Arithmetic Progression: ${n}`
	}
}

const arithmetic = new Arithmetic()
const create = arithmetic.createAP(2, 2, 5)
const res = arithmetic.getSum(5000, 2000, 12)
const array = arithmetic.getSumbyArray([10, 11, 12], 366)
const firstTerm = arithmetic.getFirstTerm(4, 60, 248)
const dif = arithmetic.getDifference(12, 60, 248)
const num = arithmetic.getNumber(12, 4, 248)
const fts = arithmetic.getFirstTermBySum(-40, 12, 9360)
const arithmeticTerm = arithmetic.getTerm(1000, -40, 12)
const sd = arithmetic.getDifferenceBySum(1000, 12, 9360)
console.log(arithmetic.isArithmeticProgression(2,3,4,7))
module.exports = Arithmetic
console.log(sd)