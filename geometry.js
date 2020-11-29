class Geometry {
	constructor(unit='cm'){
		this.unit = unit,
		this.default = 0
	}
	square(side=this.default){
		perimeter = `${4 * side} ${this.unit}`
		area = `${side * side} sq ${this.unit}`
		return `Perimeter of the square: ${perimeter}\nArea of the squararea}` 
	}
	rectangle(length=this.default, breadth=this.default){
		perimeter = `${(2 * length) + (2 * breadth)} ${this.unit}`
		area = `${length * breadth} sq ${this.unit}`
		return `Perimeter of the rectangle: ${perimeter}\nArea of the rectangle: ${area}`
	}
	circle(radius=this.default){
		pi = Math.PI
		circumference = `${(2 * this.pi * radius).toFixed(3)} ${this.unit}`
		area = `${(this.pi * Math.pow(radius, 2)).toFixed(3)} sq ${this.unit}`
		return `Circumference of the circle: ${circumference}\nArea of the circle: ${area}`
	}
	parallelogram(base=this.default, side=this.default){
		perimeter = `${2 * (base * side)} ${this.unit}`
		area = `${base * side} sq ${this.unit}`
		return `Perimeter of the parallelogram: ${perimeter}\nArea of the parallelogram: ${area}`
	}
	triangle(a=this.default, b=this.default, c=this.default){
		perimeter = `${a + b + c} ${this.unit}`
		semiperimeter = (a + b + c) / 2
		area = `${Math.sqrt(semiperimeter * ((semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c))).toFixed(3)} sq ${this.unit}`
		return `Perimeter of the triangle: ${perimeter}\nArea of the triangle: ${area}`
	}
}

module.exports = Geometry
