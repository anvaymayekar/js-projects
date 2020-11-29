function Arithmetic(){

	const [lambda, delta, sigma] = Array.from({length:3}, (_, k)=>k) //generates an array [0, 1, 2] where lambda = 0, delta = 1, sigma = 2
	
	let checkAP = (...sequence) => {
		var difference = []
		var state = false
		// This loop iterates through the given sequence to get difference by subtracting the current term(i) from its next term(i+delta) 
		// where delta is 1 and appends it into its dedicated difference array
		for (i = lambda; i < sequence.length-delta; i++)
			difference.push(sequence[i+delta] - sequence[i])
		// This loop iterates through difference array and checks whether the common difference is constant by subtracting the current term(i)
		// from its next term(i+delta) where delta is 1 and return an object with the properties like state, difference and first Term
		for (k = lambda; k < difference.length-delta; k++)
			state = difference[k] === difference[k+delta]

		return {state, difference, firstTerm: sequence[lambda]}
	}

	this.isArithmeticProgression = function(...sequence){
		status = checkAP(...sequence)
		let [message, condition] = ["mutating", " not "]
		if (status.state){
			message = status.difference[lambda]
			condition = " "
		}
		return `The given sequence is${condition}an Arithmetic Progression because the common difference is ${message}.`
	}

	this.createAP = function(firstTerm=lambda, difference=delta, number=delta){
		apArray = [firstTerm]
		for (i = delta; i < number; i++){
			apArray.push(firstTerm+=difference)
		}
		return apArray
	}

	this.getTerm = function(firstTerm=lambda, difference=delta, number=delta){
		term = firstTerm + ((number-delta)*difference)		
		return `Term ${number} of the given Arithmetic Progression: ${term}`
	}

	this.getSum = function(firstTerm=lambda, difference=delta, number=delta){
		sum = (number/sigma)*(sigma*firstTerm + (number-delta)*difference)	
		return `Sum of the terms of the given Arithmetic Progression: ${sum}`
	}

	this.getTermbyArray = function(sequence=lambda, number=delta){
		status = checkAP(...sequence)
		if (status.state)
			term = status.firstTerm + ((number-delta)*status.difference[lambda])
			return `Term ${number} of the given Arithmetic Progression: ${term}`
		return `The given sequence is not an Arithmetic Progression.`	
	}

	this.getSumbyArray = function(sequence=lambda, number=delta){
		status = checkAP(...sequence)
		if (status.state)
			sum = ((number/sigma)*(sigma*status.firstTerm + (number-delta)*status.difference[lambda]))
			return `Sum of the terms of the given Arithmetic Progression: ${sum}`
		return `The given sequence is not an Arithmetic Progression.`	
	}

	this.getFirstTerm = function(difference=delta, number=delta, term=delta){
		const firstTerm = term - ((number-delta)*difference)		
		return `First term of the given Arithmetic Progression: ${firstTerm}`
	}

	this.getFirstTermBySum = function(difference=delta, number=delta, sum=delta){
		const firstTerm = ((sum/(number/sigma))-((number-delta)*difference))/sigma
		return `First term of the given Arithmetic Progression: ${firstTerm}`
	}

	this.getDifference = function(firstTerm=lambda, number=delta, term=delta){
		difference = (term - firstTerm)/(number-delta)
		return `Common difference of the given Arithmetic Progression: ${difference}`
	}

	this.getDifferenceBySum = function(firstTerm=lambda, number=delta, sum=delta){
		difference = (sum/(number/sigma)-sigma*firstTerm)/(number-delta)
		return `Common difference of the given Arithmetic Progression: ${difference}`
	}

	this.getNumber = function(firstTerm=lambda, difference=delta, term=delta){
		number = ((term - firstTerm) / difference) + delta
		return `Common difference of the given Arithmetic Progression: ${number}`
	}
}

// deploying the function
const arithmetic = new Arithmetic()
var create = arithmetic.createAP(2, 2, 5)
var res = arithmetic.getSum(5000, 2000, 12)
var array = arithmetic.getSumbyArray([10, 11, 12], 366)
var firstTerm = arithmetic.getFirstTerm(4, 60, 248)
var dif = arithmetic.getDifference(12, 60, 248)
var num = arithmetic.getNumber(12, 4, 248)
var fts = arithmetic.getFirstTermBySum(-40, 12, 9360)
var arithmeticTerm = arithmetic.getTerm(1000, -40, 12)
var sd = arithmetic.getDifferenceBySum(1000, 12, 9360)
var apState = arithmetic.isArithmeticProgression(2,3,4,7)

// exporting the function
module.exports = Arithmetic
