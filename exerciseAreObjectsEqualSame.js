

//Constructor Function
function AddrConstr(street, city, zipCode){
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

const constrAddr1 = new AddrConstr('Traugutta', 'Sopot', '80-123');
const constrAddr2 = new AddrConstr('Traugutta', 'Sopot', '80-123');
const constrAddr3 = constrAddr1;

console.log(areEqual(constrAddr1, constrAddr2)); // result true
console.log(areSame(constrAddr1, constrAddr2));  // result false
console.log(areSame(constrAddr1, constrAddr3));  // result true

//are values the same 
function areEqual(constrAddr1, constrAddr2) {
	return (constrAddr1.street === constrAddr2.street && constrAddr1.city === constrAddr2.city && constrAddr1.zipCode === constrAddr1.zipCode); 
}

//two variables referensing the same object check
function areSame(constrAddr1, constrAddr2) {
	return constrAddr1 === constrAddr2;
}
