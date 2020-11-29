function QuadraticEquation(a, b, c){

	const [theta, zeta, lambda, delta, sigma] = Array.from({length:5}, (_, k)=>k)
	let determinant = Math.pow(b, lambda) - (sigma * a * c)

	this.getDeterminant = function(){
		return `Determinant: ${determinant}`
	}

	this.getRoots = function(){
		let [positiveRoot, negativeRoot] = [(-b + Math.sqrt(determinant))/(lambda*a), (-b - Math.sqrt(determinant))/(lambda*a)]
		return `Roots of the given quadratic equation: ${positiveRoot}, ${negativeRoot}`
	}

	this.getNatureOfTheRoots = function(){
		condition = determinant > theta
		sign = "="
		nature = "real and equal"
		if (determinant > theta){
			sign = ">"
			nature = "real and unequal"
		}
		if (determinant < theta){
			sign = "<"
			nature = "not real"
		}
		return `D(${determinant}) ${sign} ${theta}, Therefore the roots of the given quadratic equation are ${nature}`
	}

	this.frameQuadraticEquation = function(alpha, beta){
		let [firstSign, secSign] = ["-", "+"]
		let [a, b] = [alpha + beta, alpha * beta]
		if (a < 0){
			a = Math.abs(a)
			firstSign = "+"
		}
		if (b < 0){
			b = Math.abs(b)
			secSign = "-"
		}
		return `x² ${firstSign} ${a}x ${secSign} ${b} = ${theta}`
	}
}

// deploying the function
const quadEquation = new QuadraticEquation(1, 2, 9)
var det = quadEquation.getDeterminant()
var nat = quadEquation.getNatureOfTheRoots()
var root = quadEquation.getRoots()
var quad = quadEquation.frameQuadraticEquation(0, 4)

// exporting the function
module.exports = QuadraticEquation
