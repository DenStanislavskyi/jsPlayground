// result of each function
//street Traugutta
//city Sopot
//zipCode 80-123

//Factory Function
function addrFactory(street, city, zipCode){
	return address = {
	street,
	city,
	zipCode
	}	
}

//Constructor Function
function AddrConstr(street, city, zipCode){
	this.street = street;
	this.city = city;
	this.zipCode = zipCode;
}

const factoryAddr = addrFactory('Traugutta', 'Sopot', '80-123');
const constrAddr = new AddrConstr('Traugutta', 'Sopot', '80-123');

function showAdress(obj) {
	for (let key in obj)
		console.log(key, obj[key])
} 

showAdress(factoryAddr);
console.log('');
showAdress(constrAddr);
