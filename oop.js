var cart = {
value: 90,
paidDate: new Date(),
items: ['banan', 'mandarynka', 'jabłko'],
adjustments: {
	tax: 0.23,
	delivery: 15,
	promo: 0.85
	},
getPaidDate: function(){return this.paidDate.toLocaleString()},
getPrice: function(){return this.value*(1+this.adjustments.tax)*this.adjustments.promo+this.adjustments.delivery},
printItems: function(){console.log(this.items.join(', '))}
}

var order = {
value: 180,
items: ['kokos','mango','ananas'],
adjustments: {
	tax: 0.23,
	delivery: 15,
	promo: 0.85
	}
}

console.log(cart.getPrice.call(order)) // wywołanie metody obiektu cart na obiekcie order

/***********************************************************************/

function Tree(age, height, radius, hardness){
this.age = age
this.height = height
this.radius = radius
this.hardness = hardness

this.getPrice = function(){
return this.hardness * this.height * 10 + '$'
}}

var sosna = new Tree(15, 20, 1, 1)

sosna instanceof Object // true


