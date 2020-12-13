function Intrest(principal, rate, number){
	this.currency = "₹"
	
	this.compoundIntrest = function(inflation){
		amount = (principal * Math.pow((1 + rate/100), number)).toFixed(2)
		intrest = (amount-principal).toFixed(2)
		if (inflation){
			amount = (amount * inflation).toFixed(2)
			intrest = (intrest * inflation).toFixed(2)
		}
		return `Amount: ${this.currency} ${amount}\nIntrest: ${this.currency} ${intrest}`
	}
	
	this.simpleIntrest = function(inflation){
		intrest = (principal * rate * number)/100
		amount = principal + intrest
		if (inflation){
			amount = (amount * inflation).toFixed(2)
			intrest = (intrest * inflation).toFixed(2)
		}
		return `Amount: ${this.currency} ${amount}\nIntrest: ${this.currency} ${intrest}`
	}

	this.getCompoundIntrest = function(inflation){
		initialAmount = principal
		for (let i = 1; i <= number; i++){
			amount = parseFloat((principal * Math.pow((1 + rate/100), i)).toFixed(2))
			intrest = parseFloat((amount - initialAmount).toFixed(2))
			initialAmount = amount
			if (inflation){
				amount = parseFloat((amount * inflation).toFixed(2))
				intrest = parseFloat((intrest * inflation).toFixed(2))
			}
			data = {
				year: i,
				amount,
				intrest
			}
			console.log(data)
		}
	}

	this.getSimpleIntrest = function(inflation){
		initialAmount = principal
		for (let i = 1; i <= number; i++){
			intrest = parseFloat((principal * rate * i)/100)
			amount = parseFloat(principal + intrest)
			initialAmount = amount
			if (inflation){
				amount = parseFloat((amount * inflation).toFixed(2))
				intrest = parseFloat((intrest * inflation).toFixed(2))
			}
			data = {
				year: i,
				amount,
				intrest
			}
			console.log(data)
		}
	}
}

// deploying the function
const int = new Intrest(1000, 10, 3)
console.log(int.simpleIntrest())
int.getSimpleIntrest()
console.log(int.compoundIntrest())
int.getCompoundIntrest()

// exporting the function
module.export = Intrest
