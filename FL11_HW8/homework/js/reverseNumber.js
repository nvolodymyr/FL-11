function reverseNumber(numA) {
	let reversNumA = Math.abs(numA)
		.toString()
		.split('')
		.reverse()
		.join('');
	return numA > 0 ? reversNumA : -reversNumA;
}
reverseNumber(123); 
reverseNumber(-456); 
reverseNumber(10000); 
