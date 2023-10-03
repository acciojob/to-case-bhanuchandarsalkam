function toCase(text) {
  // write your code here
	let num1=text.toLowerCase();
	let num2=text.toUpperCase();
	return num1-num2;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
